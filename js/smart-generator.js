// 智能菜谱生成器 - 根据冰箱库存自动生成菜单和购物清单

// 通用调料清单（这些不放入购物清单）
const COMMON_SEASONINGS = [
    '盐', '糖', '生抽', '老抽', '料酒', '醋', '油', '酱油', '蚝油', 
    '鸡精', '味精', '胡椒粉', '花椒粉', '五香粉', '孜然粉', '辣椒粉',
    '葱', '姜', '蒜', '大葱', '小葱', '生姜', '蒜头', '蒜末', '姜末', '葱花',
    '香油', '芝麻油', '橄榄油', '菜籽油', '花生油', '玉米油',
    '淀粉', '生粉', '面粉', '水淀粉'
];

// 判断是否为通用调料
function isCommonSeasoning(ingredient) {
    return COMMON_SEASONINGS.some(seasoning => 
        ingredient.includes(seasoning) || seasoning.includes(ingredient)
    );
}

class SmartMenuGenerator {
    constructor() {
        this.fridge = {};      // 冰箱库存 {食材名: 数量}
        this.frozen = {};      // 冷冻库存 {食材名: 数量}
        this.shoppingList = {}; // 购物清单 {食材名: {count: 数量, dishes: [菜谱名]}}
        this.generatedMenu = {}; // 生成的菜单
    }

    // 加载库存数据
    loadInventory() {
        const saved = localStorage.getItem('xutao_meal_planner_inventory');
        if (saved) {
            const data = JSON.parse(saved);
            this.fridge = data.fridge || {};
            this.frozen = data.frozen || {};
        } else {
            // 初始化空库存
            this.fridge = {};
            this.frozen = {};
        }
        
        const savedShopping = localStorage.getItem('xutao_meal_planner_shopping');
        this.shoppingList = savedShopping ? JSON.parse(savedShopping) : {};
    }

    // 保存库存数据
    saveInventory() {
        localStorage.setItem('xutao_meal_planner_inventory', JSON.stringify({
            fridge: this.fridge,
            frozen: this.frozen
        }));
        localStorage.setItem('xutao_meal_planner_shopping', JSON.stringify(this.shoppingList));
    }

    // 添加食材到库存
    addToInventory(category, ingredient, amount = 1) {
        if (category === 'fridge') {
            this.fridge[ingredient] = (this.fridge[ingredient] || 0) + amount;
        } else if (category === 'frozen') {
            this.frozen[ingredient] = (this.frozen[ingredient] || 0) + amount;
        }
        this.saveInventory();
    }

    // 从库存中消耗食材
    consumeIngredient(ingredient, amount = 1) {
        // 先消耗冰箱
        if (this.fridge[ingredient]) {
            this.fridge[ingredient] -= amount;
            if (this.fridge[ingredient] <= 0) delete this.fridge[ingredient];
            this.saveInventory();
            return true;
        }
        // 再消耗冷冻
        if (this.frozen[ingredient]) {
            this.frozen[ingredient] -= amount;
            if (this.frozen[ingredient] <= 0) delete this.frozen[ingredient];
            this.saveInventory();
            return true;
        }
        return false; // 库存不足
    }

    // 检查菜谱是否可用（库存足够）
    checkDishAvailability(dish) {
        const missingIngredients = [];
        let availableCount = 0;
        
        for (const ingredient of dish.ingredients) {
            const inFridge = this.fridge[ingredient] || 0;
            const inFrozen = this.frozen[ingredient] || 0;
            const total = inFridge + inFrozen;
            
            if (total > 0) {
                availableCount++;
            } else {
                missingIngredients.push(ingredient);
            }
        }
        
        return {
            available: missingIngredients.length === 0,
            availableCount,
            totalIngredients: dish.ingredients.length,
            missingIngredients,
            percentage: Math.round((availableCount / dish.ingredients.length) * 100)
        };
    }

    // 根据库存生成一周菜单
    generateWeeklyMenu() {
        this.loadInventory();
        this.shoppingList = {}; // 清空购物清单
        this.generatedMenu = {};
        
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const meals = ['lunch', 'dinner'];
        const types = ['meat', 'veg', 'soup'];
        
        // 为每天每餐生成菜谱
        for (const day of days) {
            for (const meal of meals) {
                for (const type of types) {
                    const menuKey = `${day}-${meal}-${type}`;
                    const selectedDish = this.selectBestDish(type);
                    
                    if (selectedDish) {
                        this.generatedMenu[menuKey] = selectedDish.name;
                        
                        // 检查库存，不够的加入购物清单
                        const check = this.checkDishAvailability(selectedDish);
                        if (!check.available) {
                            for (const missing of check.missingIngredients) {
                                // 跳过通用调料
                                if (isCommonSeasoning(missing)) continue;
                                
                                if (!this.shoppingList[missing]) {
                                    this.shoppingList[missing] = {
                                        count: 0,
                                        dishes: []
                                    };
                                }
                                this.shoppingList[missing].count++;
                                // 记录是哪个菜谱需要的
                                if (!this.shoppingList[missing].dishes.includes(selectedDish.name)) {
                                    this.shoppingList[missing].dishes.push(selectedDish.name);
                                }
                            }
                        }
                        
                        // 消耗库存中的食材
                        for (const ingredient of selectedDish.ingredients) {
                            this.consumeIngredient(ingredient, 1);
                        }
                    }
                }
            }
        }
        
        this.saveInventory();
        this.saveGeneratedMenu();
        return {
            menu: this.generatedMenu,
            shoppingList: this.shoppingList
        };
    }

    // 选择最佳菜谱（优先使用库存充足的）
    selectBestDish(type) {
        const dishes = DISH_DATABASE[type] || [];
        
        // 过滤掉禁忌食材的菜谱
        const forbidden = JSON.parse(localStorage.getItem('xutao_meal_planner_forbidden') || '[]');
        const availableDishes = dishes.filter(dish => {
            return !dish.ingredients.some(ing => forbidden.includes(ing));
        });
        
        if (availableDishes.length === 0) return null;
        
        // 按库存充足度排序
        const scoredDishes = availableDishes.map(dish => {
            const check = this.checkDishAvailability(dish);
            return {
                dish,
                score: check.percentage,
                available: check.available
            };
        });
        
        // 优先选择库存100%可用的，如果没有则随机选择
        const fullyAvailable = scoredDishes.filter(d => d.available);
        if (fullyAvailable.length > 0) {
            // 从完全可用的中随机选择
            const randomIndex = Math.floor(Math.random() * fullyAvailable.length);
            return fullyAvailable[randomIndex].dish;
        } else {
            // 随机选择一个，会触发购物清单
            const randomIndex = Math.floor(Math.random() * scoredDishes.length);
            return scoredDishes[randomIndex].dish;
        }
    }

    // 保存生成的菜单
    saveGeneratedMenu() {
        localStorage.setItem('xutao_meal_planner_menu', JSON.stringify(this.generatedMenu));
        localStorage.setItem('xutao_meal_planner_shopping', JSON.stringify(this.shoppingList));
    }

    // 重新计算购物清单（当库存变化时调用）
    recalculateShoppingList() {
        this.loadInventory();
        this.shoppingList = {};
        
        // 获取当前菜单
        const savedMenu = localStorage.getItem('xutao_meal_planner_menu');
        if (!savedMenu) return this.shoppingList;
        
        const menu = JSON.parse(savedMenu);
        
        // 遍历菜单，检查每个菜谱
        for (const [key, dishName] of Object.entries(menu)) {
            // 找到对应的菜谱对象
            let dish = null;
            for (const type of ['meat', 'veg', 'soup']) {
                dish = DISH_DATABASE[type]?.find(d => d.name === dishName);
                if (dish) break;
            }
            
            if (dish) {
                const check = this.checkDishAvailability(dish);
                if (!check.available) {
                    for (const missing of check.missingIngredients) {
                        // 跳过通用调料
                        if (isCommonSeasoning(missing)) continue;
                        
                        if (!this.shoppingList[missing]) {
                            this.shoppingList[missing] = {
                                count: 0,
                                dishes: []
                            };
                        }
                        this.shoppingList[missing].count++;
                        // 记录是哪个菜谱需要的
                        if (!this.shoppingList[missing].dishes.includes(dish.name)) {
                            this.shoppingList[missing].dishes.push(dish.name);
                        }
                    }
                }
            }
        }
        
        localStorage.setItem('xutao_meal_planner_shopping', JSON.stringify(this.shoppingList));
        return this.shoppingList;
    }

    // 获取购物清单（按类别分类）
    getCategorizedShoppingList() {
        const categories = {
            '肉类': [],
            '海鲜': [],
            '蔬菜': [],
            '豆制品': [],
            '其他': []
        };
        
        const categoryMap = {
            '肉类': ['猪肉', '牛肉', '羊肉', '鸡肉', '鸭肉', '培根', '肥牛卷', '排骨', '猪肚', '乌鸡', '鸡胸肉', '鸡腿', '鸡翅', '里脊', '肉馅'],
            '海鲜': ['鲈鱼', '鳕鱼', '三文鱼', '虾', '虾仁', '鱿鱼', '蟹', '鱼', '贝', '花甲', '扇贝', '墨鱼', '带鱼', '黄鱼', '比目鱼', '多宝鱼', '石斑鱼', '桂鱼', '青花鱼'],
            '蔬菜': ['白菜', '青菜', '菠菜', '芦笋', '青椒', '西红柿', '黄瓜', '西葫芦', '蒜苔', '口蘑', '蘑菇', '菇', '蟹味菇', '杏鲍菇', '金针菇', '平菇', '木耳', '海带', '紫菜', '腐竹', '豆角', '茄子', '土豆', '胡萝卜', '洋葱', '芹菜', '韭菜', '莴笋', '莲藕', '山药', '南瓜', '冬瓜', '丝瓜'],
            '豆制品': ['豆腐', '豆皮', '腐竹', '香干', '千张', '豆干', '油豆腐', '嫩豆腐', '老豆腐']
        };
        
        for (const [ingredient, data] of Object.entries(this.shoppingList)) {
            // 跳过通用调料（双重保险）
            if (isCommonSeasoning(ingredient)) continue;
            
            let categorized = false;
            
            for (const [catName, keywords] of Object.entries(categoryMap)) {
                if (keywords.some(kw => ingredient.includes(kw))) {
                    categories[catName].push({
                        ingredient,
                        count: data.count,
                        dishes: data.dishes || []
                    });
                    categorized = true;
                    break;
                }
            }
            
            if (!categorized) {
                categories['其他'].push({
                    ingredient,
                    count: data.count,
                    dishes: data.dishes || []
                });
            }
        }
        
        return categories;
    }
}

// 全局实例
const smartGenerator = new SmartMenuGenerator();

// 页面加载时初始化
function initSmartGenerator() {
    smartGenerator.loadInventory();
}

// 导出函数供其他页面使用
window.SmartMenuGenerator = SmartMenuGenerator;
window.smartGenerator = smartGenerator;
window.initSmartGenerator = initSmartGenerator;
