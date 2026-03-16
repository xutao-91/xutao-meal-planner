// 菜谱数据库
const DISH_DATABASE = {
    // 荤菜
    meat: [
        {
            id: 'm1',
            name: '清蒸鲈鱼',
            category: 'meat',
            tags: ['海鲜', '清淡', '蒸'],
            ingredients: ['鲈鱼', '姜', '葱', '料酒', '生抽'],
            time: '20分钟',
            difficulty: '简单',
            method: '鲈鱼洗净划刀，放姜片葱段，蒸8-10分钟，淋生抽热油',
            note: '周末推荐',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm2',
            name: '番茄炒蛋',
            category: 'meat',
            tags: ['快手', '家常', '炒'],
            ingredients: ['西红柿', '鸡蛋', '葱', '盐', '糖'],
            time: '10分钟',
            difficulty: '简单',
            method: '番茄切块，鸡蛋打散炒熟盛出，炒番茄出汁，回锅鸡蛋，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'm3',
            name: '青椒炒培根',
            category: 'meat',
            tags: ['快手', '炒', '西式'],
            ingredients: ['青椒', '培根', '蒜', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '培根切小块，青椒切丝，先炒培根出油，再炒青椒，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'm4',
            name: '清蒸鳕鱼',
            category: 'meat',
            tags: ['海鲜', '清淡', '蒸'],
            ingredients: ['鳕鱼', '姜', '葱', '料酒', '生抽'],
            time: '15分钟',
            difficulty: '简单',
            method: '鳕鱼解冻，放姜片，蒸8分钟，淋生抽热油',
            note: '冷冻食材可用',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm5',
            name: '清蒸三文鱼',
            category: 'meat',
            tags: ['海鲜', '清淡', '蒸'],
            ingredients: ['三文鱼', '柠檬', '黑胡椒', '盐'],
            time: '15分钟',
            difficulty: '简单',
            method: '三文鱼解冻，撒盐和黑胡椒，蒸10分钟，挤柠檬汁',
            note: '冷冻食材可用',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm6',
            name: '香煎鳕鱼',
            category: 'meat',
            tags: ['海鲜', '煎', '少油'],
            ingredients: ['鳕鱼', '黄油', '黑胡椒', '盐', '柠檬'],
            time: '15分钟',
            difficulty: '简单',
            method: '鳕鱼解冻擦干，少油小火煎至两面金黄，撒黑胡椒盐，挤柠檬',
            note: '少油健康做法',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm7',
            name: '肥牛卷炒洋葱',
            category: 'meat',
            tags: ['快手', '炒', '牛肉'],
            ingredients: ['肥牛卷', '洋葱', '生抽', '料酒', '糖'],
            time: '15分钟',
            difficulty: '简单',
            method: '洋葱切丝，肥牛焯水捞出，炒洋葱软化，加肥牛和调料炒匀',
            note: '冷冻食材可用',
            forbidden: []
        },
        {
            id: 'm8',
            name: '肥牛卷炒青椒',
            category: 'meat',
            tags: ['快手', '炒', '牛肉'],
            ingredients: ['肥牛卷', '青椒', '生抽', '料酒', '蒜'],
            time: '15分钟',
            difficulty: '简单',
            method: '青椒切丝，肥牛焯水，蒜爆香，炒青椒和肥牛，加生抽调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'm9',
            name: '葱姜排骨',
            category: 'meat',
            tags: ['预制', '加热即可', '猪肉'],
            ingredients: ['排骨（预制）', '葱', '姜'],
            time: '10分钟',
            difficulty: '简单',
            method: '冷冻预制排骨加热即可，可撒新鲜葱花增香',
            note: '冷冻现成，加热即食',
            forbidden: ['排骨汤']
        },
        {
            id: 'm10',
            name: '清蒸乌鸡',
            category: 'meat',
            tags: ['蒸', '鸡肉', '清淡'],
            ingredients: ['乌鸡', '姜', '葱', '枸杞', '盐'],
            time: '40分钟',
            difficulty: '中等',
            method: '乌鸡解冻洗净，放姜片葱段，蒸40分钟，出锅撒枸杞',
            note: '不做乌鸡汤，改为清蒸',
            forbidden: ['乌鸡汤']
        },
        {
            id: 'm11',
            name: '红烧乌鸡',
            category: 'meat',
            tags: ['红烧', '鸡肉'],
            ingredients: ['乌鸡', '生抽', '老抽', '糖', '姜', '葱'],
            time: '45分钟',
            difficulty: '中等',
            method: '乌鸡切块焯水，少油炒糖色，下鸡块翻炒，加生抽老抽水，焖煮30分钟',
            note: '少油版红烧',
            forbidden: ['乌鸡汤']
        },
        {
            id: 'm12',
            name: '芦笋炒虾仁',
            category: 'meat',
            tags: ['海鲜', '炒', '清淡'],
            ingredients: ['芦笋', '虾仁', '蒜', '盐', '黑胡椒'],
            time: '15分钟',
            difficulty: '简单',
            method: '芦笋切段焯水，虾仁解冻，蒜爆香，炒虾仁变色，加芦笋调味',
            note: '清淡健康',
            forbidden: []
        },
        {
            id: 'm13',
            name: '蒜苔炒培根',
            category: 'meat',
            tags: ['快手', '炒'],
            ingredients: ['蒜苔', '培根', '蒜', '生抽'],
            time: '15分钟',
            difficulty: '简单',
            method: '蒜苔切段，培根切小块，先炒培根出油，再炒蒜苔，调味',
            note: '可用现有食材',
            forbidden: []
        }
    ],
    
    // 汤类
    soup: [
        {
            id: 's1',
            name: '番茄蛋花汤',
            category: 'soup',
            tags: ['快手', '清淡', '汤'],
            ingredients: ['西红柿', '鸡蛋', '葱', '盐', '香油'],
            time: '10分钟',
            difficulty: '简单',
            method: '西红柿切块炒出汁，加水烧开，淋入打散的鸡蛋，调味，撒葱花',
            note: '快手素汤',
            forbidden: []
        },
        {
            id: 's2',
            name: '紫菜蛋花汤',
            category: 'soup',
            tags: ['快手', '清淡', '汤'],
            ingredients: ['紫菜', '鸡蛋', '虾皮', '葱', '盐', '香油'],
            time: '5分钟',
            difficulty: '简单',
            method: '水烧开，放入紫菜和虾皮，淋入鸡蛋液，调味，撒葱花',
            note: '最简单的汤',
            forbidden: []
        },
        {
            id: 's3',
            name: '青菜豆腐汤',
            category: 'soup',
            tags: ['清淡', '素汤'],
            ingredients: ['上海青', '嫩豆腐', '姜', '盐', '香油'],
            time: '15分钟',
            difficulty: '简单',
            method: '豆腐切块，水烧开，放入豆腐和青菜，煮5分钟，调味',
            note: '清淡健康',
            forbidden: []
        },
        {
            id: 's4',
            name: '冬瓜丸子汤',
            category: 'soup',
            tags: ['清淡', '汤'],
            ingredients: ['冬瓜', '猪肉馅', '姜', '葱', '盐', '胡椒粉'],
            time: '30分钟',
            difficulty: '中等',
            method: '冬瓜切块，肉馅加调料做成丸子，水烧开，放入丸子煮熟，加冬瓜煮软，调味',
            note: '需要猪肉馅',
            forbidden: []
        },
        {
            id: 's5',
            name: '玉米排骨汤',
            category: 'soup',
            tags: ['汤', '滋补'],
            ingredients: ['玉米', '排骨', '姜', '葱', '盐'],
            time: '60分钟',
            difficulty: '中等',
            method: '排骨焯水，玉米切段，一起炖煮1小时，调味',
            note: '需要排骨',
            forbidden: []
        }
    ],

    // 素菜
    veg: [
        {
            id: 'v1',
            name: '清炒上海青',
            category: 'veg',
            tags: ['快手', '炒', '绿叶菜'],
            ingredients: ['上海青', '蒜', '盐', '油'],
            time: '5分钟',
            difficulty: '简单',
            method: '上海青洗净，蒜爆香，大火快炒，调味出锅',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v2',
            name: '清炒西葫芦',
            category: 'veg',
            tags: ['快手', '炒'],
            ingredients: ['西葫芦', '蒜', '盐', '油'],
            time: '8分钟',
            difficulty: '简单',
            method: '西葫芦切片，蒜爆香，中火炒软，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v3',
            name: '西葫芦炒蛋',
            category: 'veg',
            tags: ['快手', '炒', '蛋'],
            ingredients: ['西葫芦', '鸡蛋', '葱', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '西葫芦切片，鸡蛋炒熟盛出，炒西葫芦，回锅鸡蛋，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v4',
            name: '蒜苔炒口蘑',
            category: 'veg',
            tags: ['炒', '菌菇'],
            ingredients: ['蒜苔', '口蘑', '蒜', '生抽', '盐'],
            time: '12分钟',
            difficulty: '简单',
            method: '蒜苔切段，口蘑切片，蒜爆香，先炒蒜苔，再下口蘑，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v5',
            name: '口蘑炒上海青',
            category: 'veg',
            tags: ['炒', '菌菇', '绿叶菜'],
            ingredients: ['口蘑', '上海青', '蒜', '盐'],
            time: '8分钟',
            difficulty: '简单',
            method: '口蘑切片，上海青洗净，蒜爆香，先炒口蘑，再下青菜，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v6',
            name: '蟹味菇炒蛋',
            category: 'veg',
            tags: ['炒', '菌菇', '蛋'],
            ingredients: ['蟹味菇', '鸡蛋', '葱', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '蟹味菇洗净，鸡蛋炒熟盛出，炒蟹味菇出水，回锅鸡蛋，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v7',
            name: '清炒芦笋',
            category: 'veg',
            tags: ['快手', '炒'],
            ingredients: ['芦笋', '蒜', '盐', '黑胡椒'],
            time: '8分钟',
            difficulty: '简单',
            method: '芦笋切段，蒜爆香，中火炒3-4分钟，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v8',
            name: '芦笋炒口蘑',
            category: 'veg',
            tags: ['炒', '菌菇'],
            ingredients: ['芦笋', '口蘑', '蒜', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '芦笋切段，口蘑切片，蒜爆香，同炒，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v9',
            name: '白菜炖豆腐',
            category: 'veg',
            tags: ['炖', '清淡'],
            ingredients: ['白菜', '豆腐', '姜', '盐', '生抽'],
            time: '20分钟',
            difficulty: '简单',
            method: '白菜切块，豆腐切块，姜爆香，炒白菜，加水和豆腐，炖煮15分钟',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v10',
            name: '清炒白菜',
            category: 'veg',
            tags: ['快手', '炒'],
            ingredients: ['白菜', '蒜', '盐', '油'],
            time: '8分钟',
            difficulty: '简单',
            method: '白菜切块，蒜爆香，大火快炒，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v11',
            name: '蒜苔炒蟹味菇',
            category: 'veg',
            tags: ['炒', '菌菇'],
            ingredients: ['蒜苔', '蟹味菇', '蒜', '生抽'],
            time: '12分钟',
            difficulty: '简单',
            method: '蒜苔切段，蟹味菇洗净，蒜爆香，同炒，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v12',
            name: '蒜苔炒蛋',
            category: 'veg',
            tags: ['炒', '蛋'],
            ingredients: ['蒜苔', '鸡蛋', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '蒜苔切段，鸡蛋炒熟盛出，炒蒜苔，回锅鸡蛋，调味',
            note: '可用现有食材',
            forbidden: []
        },
        {
            id: 'v13',
            name: '青椒炒蛋',
            category: 'veg',
            tags: ['快手', '炒', '蛋'],
            ingredients: ['青椒', '鸡蛋', '葱', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '青椒切丝，鸡蛋炒熟盛出，炒青椒，回锅鸡蛋，调味',
            note: '可用现有食材',
            forbidden: []
        }
    ]
};

// 现有食材列表
const AVAILABLE_INGREDIENTS = {
    refrigerated: [
        '蒜苔', '西红柿', '鸡蛋', '西葫芦', '青椒', 
        '白菜', '上海青', '口蘑', '芦笋', '培根', 
        '蟹味菇', '豆腐', '菠菜'
    ],
    frozen: [
        '鱿鱼', '鳕鱼', '三文鱼', '汤圆', 
        '肥牛卷', '乌鸡', '葱姜排骨', '牛肉', '猪肚'
    ]
};

// 禁忌食材/菜品
const FORBIDDEN_ITEMS = [
    '凉拌黄瓜',
    '糖醋里脊',
    '菠菜豆腐汤',
    '带鱼',
    '荷兰豆',
    '鲫鱼',
    '鱼汤',
    '回锅肉',
    '藕',
    '鸡汤',
    '鸭汤',
    '鱼汤',
    '干锅',
    '地三鲜',
    '西湖牛肉羹',
    '红烧狮子头',
    '凉拌腐竹',
    '各种荤汤'
];

// 从localStorage加载保存的禁忌
function loadForbiddenFromStorage() {
    const saved = localStorage.getItem('xutao_meal_planner_forbidden');
    return saved ? JSON.parse(saved) : [...FORBIDDEN_ITEMS];
}

// 保存禁忌到localStorage
function saveForbiddenToStorage(forbidden) {
    localStorage.setItem('xutao_meal_planner_forbidden', JSON.stringify(forbidden));
}

// 检查菜品是否包含禁忌
function hasForbiddenDish(dishName, forbiddenList) {
    return forbiddenList.some(forbidden => 
        dishName.toLowerCase().includes(forbidden.toLowerCase()) ||
        forbidden.includes(dishName)
    );
}

// 获取可用菜品（排除禁忌）
function getAvailableDishes(category, forbiddenList) {
    const dishes = DISH_DATABASE[category] || [];
    return dishes.filter(dish => !hasForbiddenDish(dish.name, forbiddenList));
}

// 根据现有食材推荐菜品
function getDishesByIngredients(availableIngredients, category, forbiddenList) {
    const dishes = getAvailableDishes(category, forbiddenList);
    
    return dishes.map(dish => {
        const matchedIngredients = dish.ingredients.filter(ing => 
            availableIngredients.some(avail => 
                ing.includes(avail) || avail.includes(ing)
            )
        );
        const matchRate = matchedIngredients.length / dish.ingredients.length;
        
        return {
            ...dish,
            matchedIngredients,
            matchRate,
            canMake: matchRate >= 0.5 // 50%以上食材匹配即可做
        };
    }).sort((a, b) => b.matchRate - a.matchRate);
}
