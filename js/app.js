// 主应用逻辑
let currentMenu = {};
let currentForbidden = [];
let currentIngredients = [];

// 初始化
function init() {
    loadData();
    renderWeekDates();
    renderMenu();
    renderMobileMenu();
    updateStatusBar();
}

// 加载数据
function loadData() {
    // 从localStorage加载
    const savedMenu = localStorage.getItem('xutao_meal_planner_menu');
    const savedForbidden = localStorage.getItem('xutao_meal_planner_forbidden');
    const savedIngredients = localStorage.getItem('xutao_meal_planner_ingredients');
    
    if (savedMenu) {
        currentMenu = JSON.parse(savedMenu);
    } else {
        // 默认菜单（根据主人认可的菜单）
        currentMenu = {
            'monday-lunch-meat': '番茄炒蛋',
            'monday-lunch-veg': '清炒上海青',
            'monday-dinner-meat': '青椒炒培根',
            'monday-dinner-veg': '蒜苔炒口蘑',
            'tuesday-lunch-meat': '肥牛卷炒洋葱',
            'tuesday-lunch-veg': '清炒西葫芦',
            'tuesday-dinner-meat': '清蒸鳕鱼',
            'tuesday-dinner-veg': '白菜炖豆腐',
            'wednesday-lunch-meat': '葱姜排骨',
            'wednesday-lunch-veg': '蟹味菇炒蛋',
            'wednesday-dinner-meat': '清蒸乌鸡',
            'wednesday-dinner-veg': '清炒芦笋',
            'thursday-lunch-meat': '牛肉',
            'thursday-lunch-veg': '青椒炒蛋',
            'thursday-dinner-meat': '清蒸三文鱼',
            'thursday-dinner-veg': '蒜苔炒蟹味菇',
            'friday-lunch-meat': '猪肚',
            'friday-lunch-veg': '清炒白菜',
            'friday-dinner-meat': '肥牛卷炒青椒',
            'friday-dinner-veg': '西葫芦炒蛋',
            'saturday-lunch-meat': '清蒸鲈鱼',
            'saturday-lunch-veg': '清炒芦笋',
            'saturday-dinner-meat': '香煎鳕鱼',
            'saturday-dinner-veg': '口蘑炒上海青',
            'sunday-lunch-meat': '乌鸡红烧',
            'sunday-lunch-veg': '蒜苔炒蛋',
            'sunday-dinner-meat': '三文鱼煎',
            'sunday-dinner-veg': '清炒菠菜'
        };
        saveData();
    }
    
    currentForbidden = savedForbidden ? JSON.parse(savedForbidden) : [...FORBIDDEN_ITEMS];
    
    if (savedIngredients) {
        currentIngredients = JSON.parse(savedIngredients);
    } else {
        // 默认食材 - 扩展以覆盖500道菜谱
        currentIngredients = {
            fridge: [
                '蒜苔', '西红柿', '鸡蛋', '西葫芦', '青椒', '白菜', '上海青', '口蘑', '芦笋', '培根', 
                '蟹味菇', '豆腐', '菠菜', '洋葱', '胡萝卜', '土豆', '芹菜', '韭菜', '香菜', '葱', 
                '姜', '蒜', '黄瓜', '生菜', '油麦菜', '芥蓝', '空心菜', '苋菜', '红薯', '南瓜',
                '冬瓜', '丝瓜', '苦瓜', '茄子', '豆角', '毛豆', '花生', '玉米', '山药', '莲藕',
                '木耳', '银耳', '海带', '紫菜', '腐竹', '豆皮', '香干', '千张', '粉条', '粉丝',
                '大米', '糯米', '面粉', '面条', '馄饨皮', '饺子皮', '包子皮', '馒头', '花卷',
                '芝麻', '枸杞', '红枣', '桂圆', '莲子', '百合', '银耳', '木耳', '香菇', '平菇',
                '金针菇', '杏鲍菇', '茶树菇', '竹荪', '虫草花', '猴头菇'
            ],
            frozen: [
                '鱿鱼', '鳕鱼', '三文鱼', '汤圆', '肥牛卷', '乌鸡', '葱姜排骨', '牛肉', '猪肚',
                '虾', '虾仁', '蟹肉棒', '墨鱼仔', '扇贝', '花甲', '蛏子', '皮皮虾', '螃蟹', '龙虾',
                '鲈鱼', '多宝鱼', '石斑鱼', '桂花鱼', '黄鱼', '带鱼', '比目鱼', '金枪鱼', '秋刀鱼',
                '鸡胸肉', '鸡腿', '鸡翅', '鸭肉', '鹅肉', '鸽子', '鹌鹑', '鸡蛋', '鸭蛋', '皮蛋',
                '咸蛋', '鹌鹑蛋', '猪肉馅', '牛肉馅', '羊肉', '羊排', '牛尾', '牛腱', '猪蹄',
                '猪大肠', '猪血', '鸭血', '牛百叶', '黄喉', '毛肚'
            ]
        };
    }
}

// 保存数据
function saveData() {
    localStorage.setItem('xutao_meal_planner_menu', JSON.stringify(currentMenu));
    localStorage.setItem('xutao_meal_planner_forbidden', JSON.stringify(currentForbidden));
    localStorage.setItem('xutao_meal_planner_ingredients', JSON.stringify(currentIngredients));
}

// 渲染周日期
function renderWeekDates() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=周日, 1=周一...
    
    // 找到本周一
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    days.forEach((day, index) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);
        const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
        const element = document.getElementById(`date-${day}`);
        if (element) {
            element.textContent = dateStr;
        }
    });
    
    // 更新当前周显示
    const weekElement = document.getElementById('current-week');
    if (weekElement) {
        weekElement.textContent = `${monday.getMonth() + 1}月${monday.getDate()}日 - ${today.getMonth() + 1}月${today.getDate() + (6 - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))}日`;
    }
}

// 渲染菜单
function renderMenu() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const meals = ['lunch', 'dinner'];
    const types = ['meat', 'veg', 'soup'];
    
    days.forEach(day => {
        meals.forEach(meal => {
            types.forEach(type => {
                const key = `${day}-${meal}-${type}`;
                const element = document.getElementById(key);
                if (element) {
                    const dishName = currentMenu[key];
                    if (dishName) {
                        element.textContent = dishName;
                        element.classList.remove('text-gray-400');
                        element.classList.add('text-gray-900');
                    } else {
                        element.textContent = '点击设置';
                        element.classList.remove('text-gray-900');
                        element.classList.add('text-gray-400');
                    }
                }
            });
        });
    });
}

// 渲染移动端菜单
function renderMobileMenu() {
    const container = document.getElementById('mobile-menu-list');
    if (!container) return;
    
    const days = [
        { id: 'monday', name: '周一' },
        { id: 'tuesday', name: '周二' },
        { id: 'wednesday', name: '周三' },
        { id: 'thursday', name: '周四' },
        { id: 'friday', name: '周五' },
        { id: 'saturday', name: '周六' },
        { id: 'sunday', name: '周日' }
    ];
    
    let html = '';
    days.forEach(day => {
        const dateElement = document.getElementById(`date-${day.id}`);
        const date = dateElement ? dateElement.textContent : '';
        
        html += `
            <div class="day-column-mobile p-4" data-day="${day.id}">
                <div class="flex justify-between items-center mb-3">
                    <div class="font-bold text-lg">${day.name}</div>
                    <div class="text-sm text-gray-500">${date}</div>
                </div>
                
                <div class="space-y-3">
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <div class="text-xs font-semibold text-gray-400 mb-2">午餐</div>
                        <div class="dish-card bg-red-50 border-l-4 border-red-400 p-2 rounded mb-2 cursor-pointer" 
                             onclick="showDishDetail('${day.id}', 'lunch', 'meat')">
                            <div class="text-xs text-red-600">🔴 荤菜</div>
                            <div id="mobile-${day.id}-lunch-meat" class="font-medium">${currentMenu[`${day.id}-lunch-meat`] || '点击设置'}</div>
                        </div>
                        <div class="dish-card bg-green-50 border-l-4 border-green-400 p-2 rounded mb-2 cursor-pointer"
                             onclick="showDishDetail('${day.id}', 'lunch', 'veg')">
                            <div class="text-xs text-green-600">🟢 素菜</div>
                            <div id="mobile-${day.id}-lunch-veg" class="font-medium">${currentMenu[`${day.id}-lunch-veg`] || '点击设置'}</div>
                        </div>
                        <div class="dish-card bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded cursor-pointer"
                             onclick="showDishDetail('${day.id}', 'lunch', 'soup')">
                            <div class="text-xs text-yellow-600">🟡 汤</div>
                            <div id="mobile-${day.id}-lunch-soup" class="font-medium">${currentMenu[`${day.id}-lunch-soup`] || '点击设置'}</div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <div class="text-xs font-semibold text-gray-400 mb-2">晚餐</div>
                        <div class="dish-card bg-red-50 border-l-4 border-red-400 p-2 rounded mb-2 cursor-pointer"
                             onclick="showDishDetail('${day.id}', 'dinner', 'meat')">
                            <div class="text-xs text-red-600">🔴 荤菜</div>
                            <div id="mobile-${day.id}-dinner-meat" class="font-medium">${currentMenu[`${day.id}-dinner-meat`] || '点击设置'}</div>
                        </div>
                        <div class="dish-card bg-green-50 border-l-4 border-green-400 p-2 rounded mb-2 cursor-pointer"
                             onclick="showDishDetail('${day.id}', 'dinner', 'veg')">
                            <div class="text-xs text-green-600">🟢 素菜</div>
                            <div id="mobile-${day.id}-dinner-veg" class="font-medium">${currentMenu[`${day.id}-dinner-veg`] || '点击设置'}</div>
                        </div>
                        <div class="dish-card bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded cursor-pointer"
                             onclick="showDishDetail('${day.id}', 'dinner', 'soup')">
                            <div class="text-xs text-yellow-600">🟡 汤</div>
                            <div id="mobile-${day.id}-dinner-soup" class="font-medium">${currentMenu[`${day.id}-dinner-soup`] || '点击设置'}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 更新状态栏
function updateStatusBar() {
    const ingredientCount = document.getElementById('ingredient-count');
    const forbiddenCount = document.getElementById('forbidden-count');
    
    if (ingredientCount) {
        ingredientCount.textContent = currentIngredients.length;
    }
    if (forbiddenCount) {
        forbiddenCount.textContent = currentForbidden.length;
    }
}

// 显示菜品详情
function showDishDetail(day, meal, type) {
    const key = `${day}-${meal}-${type}`;
    const dishName = currentMenu[key];
    
    // 查找菜品详情
    let dish = null;
    if (dishName) {
        const allDishes = [...DISH_DATABASE.meat, ...DISH_DATABASE.veg];
        dish = allDishes.find(d => d.name === dishName);
    }
    
    const modal = document.getElementById('dish-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    if (!modal || !title || !content) return;
    
    if (dish) {
        title.textContent = dish.name;
        content.innerHTML = `
            <div class="space-y-3">
                <div class="flex items-center space-x-2">
                    <span class="px-2 py-1 rounded text-xs ${dish.category === 'meat' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                        ${dish.category === 'meat' ? '🔴 荤菜' : '🟢 素菜'}
                    </span>
                    <span class="text-sm text-gray-500">⏱️ ${dish.time}</span>
                    <span class="text-sm text-gray-500">📊 ${dish.difficulty}</span>
                </div>
                
                <div>
                    <div class="font-semibold text-gray-700">所需食材：</div>
                    <div class="flex flex-wrap gap-1 mt-1">
                        ${dish.ingredients.map(ing => `
                            <span class="px-2 py-1 bg-gray-100 rounded text-sm ${currentIngredients.some(i => ing.includes(i) || i.includes(ing)) ? 'text-green-700 bg-green-50' : 'text-gray-600'}">
                                ${ing} ${currentIngredients.some(i => ing.includes(i) || i.includes(ing)) ? '✓' : ''}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <div class="font-semibold text-gray-700">做法：</div>
                    <div class="text-gray-600 mt-1 text-sm leading-relaxed">${dish.method}</div>
                </div>
                
                ${dish.note ? `
                <div class="bg-blue-50 p-2 rounded text-sm text-blue-800">
                        💡 ${dish.note}
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        title.textContent = '设置菜品';
        content.innerHTML = `
            <div class="text-gray-500 mb-4">
                当前未设置菜品，点击下方按钮智能推荐或手动选择
            </div>
            <button onclick="recommendDish('${day}', '${meal}', '${type}')" 
                    class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                ✨ 智能推荐
            </button>
        `;
    }
    
    modal.classList.remove('hidden');
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('dish-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 智能推荐菜品
function recommendDish(day, meal, type) {
    // 将食材对象转换为扁平数组
    const allIngredients = [
        ...(currentIngredients.fridge || []),
        ...(currentIngredients.frozen || [])
    ];
    
    const recommendations = getDishesByIngredients(allIngredients, type, currentForbidden);
    const topRecommendations = recommendations.filter(d => d.canMake).slice(0, 5);
    
    const content = document.getElementById('modal-content');
    if (!content) return;
    
    if (topRecommendations.length === 0) {
        content.innerHTML = `
            <div class="text-orange-600">
                ⚠️ 根据现有食材和禁忌，暂无可推荐菜品
            </div>
            <div class="mt-4 text-sm text-gray-600">
                建议：<br>
                1. 检查禁忌设置是否过于严格<br>
                2. 添加更多食材
            </div>
        `;
        return;
    }
    
    content.innerHTML = `
        <div class="space-y-3">
            <div class="text-sm text-gray-600 mb-3">
                根据您的食材和偏好，推荐以下菜品：
            </div>
            ${topRecommendations.map(dish => `
                <div class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition"
                     onclick="selectDish('${day}', '${meal}', '${type}', '${dish.name}')"
                >
                    <div class="flex justify-between items-start">
                        <div class="font-medium">${dish.name}</div>
                        <span class="text-xs px-2 py-1 rounded ${dish.category === 'meat' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}"
                        >
                            ${dish.category === 'meat' ? '荤' : '素'}
                        </span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                        食材匹配度: ${Math.round(dish.matchRate * 100)}% | ⏱️ ${dish.time}
                    </div>
                    <div class="text-xs text-gray-600 mt-2">
                        缺少: ${dish.ingredients.filter(ing => !currentIngredients.some(i => ing.includes(i) || i.includes(ing))).join(', ') || '无'}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 选择菜品
function selectDish(day, meal, type, dishName) {
    const key = `${day}-${meal}-${type}`;
    currentMenu[key] = dishName;
    saveData();
    renderMenu();
    renderMobileMenu();
    closeModal();
}

// 编辑菜品
function editDish() {
    const title = document.getElementById('modal-title');
    if (title && title.textContent !== '设置菜品') {
        // 从标题提取菜品名
        const dishName = title.textContent;
        
        // 找到当前菜品的类型
        const allDishes = [...DISH_DATABASE.meat, ...DISH_DATABASE.veg, ...DISH_DATABASE.soup];
        const currentDish = allDishes.find(d => d.name === dishName);
        
        if (currentDish) {
            // 显示推荐列表让用户选择
            const type = currentDish.category;
            const day = 'monday'; // 默认值
            const meal = 'lunch'; // 默认值
            
            // 调用推荐功能显示其他选项
            recommendDish(day, meal, type);
        }
    }
}

// 智能生成一周菜单
function generateWeeklyMenu() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const meals = ['lunch', 'dinner'];
    
    // 清除现有菜单
    currentMenu = {};
    
    // 将食材对象转换为扁平数组
    const allIngredients = [
        ...(currentIngredients.fridge || []),
        ...(currentIngredients.frozen || [])
    ];
    
    // 获取可用菜品
    const meatDishes = getDishesByIngredients(allIngredients, 'meat', currentForbidden)
        .filter(d => d.canMake);
    const vegDishes = getDishesByIngredients(allIngredients, 'veg', currentForbidden)
        .filter(d => d.canMake);
    const soupDishes = getDishesByIngredients(allIngredients, 'soup', currentForbidden)
        .filter(d => d.canMake);
    
    if (meatDishes.length === 0 || vegDishes.length === 0) {
        alert('可用菜品不足，请检查食材和禁忌设置');
        return;
    }
    
    // 为每餐分配菜品（尽量不重复）
    let meatIndex = 0;
    let vegIndex = 0;
    let soupIndex = 0;
    
    days.forEach(day => {
        meals.forEach(meal => {
            const meatKey = `${day}-${meal}-meat`;
            const vegKey = `${day}-${meal}-veg`;
            const soupKey = `${day}-${meal}-soup`;
            
            // 分配荤菜
            if (meatDishes.length > 0) {
                currentMenu[meatKey] = meatDishes[meatIndex % meatDishes.length].name;
                meatIndex++;
            }
            
            // 分配素菜
            if (vegDishes.length > 0) {
                currentMenu[vegKey] = vegDishes[vegIndex % vegDishes.length].name;
                vegIndex++;
            }
            
            // 分配汤类（如果有）
            if (soupDishes.length > 0) {
                currentMenu[soupKey] = soupDishes[soupIndex % soupDishes.length].name;
                soupIndex++;
            }
        });
    });
    
    saveData();
    renderMenu();
    renderMobileMenu();
    alert('✅ 一周菜单已智能生成！');
}

// 导出菜单
function exportMenu() {
    const data = {
        menu: currentMenu,
        forbidden: currentForbidden,
        ingredients: currentIngredients,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xutao-menu-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 导入菜单
function importMenu(input) {
    const file = input.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.menu) currentMenu = data.menu;
            if (data.forbidden) currentForbidden = data.forbidden;
            if (data.ingredients) currentIngredients = data.ingredients;
            
            saveData();
            renderMenu();
            renderMobileMenu();
            updateStatusBar();
            
            alert('✅ 菜单导入成功！');
        } catch (err) {
            alert('❌ 导入失败：文件格式错误');
        }
    };
    reader.readAsText(file);
    
    // 清空input
    input.value = '';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('dish-modal');
    if (event.target === modal) {
        closeModal();
    }
}
