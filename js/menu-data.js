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
        },
        {
            id: 'm14',
            name: '洋葱炒牛肉',
            category: 'meat',
            tags: ['炒', '牛肉'],
            ingredients: ['牛肉', '洋葱', '生抽', '料酒', '黑胡椒'],
            time: '15分钟',
            difficulty: '简单',
            method: '牛肉切片，洋葱切丝，牛肉炒至变色盛出，炒洋葱软化，回锅牛肉，调味',
            note: '可用冷冻牛肉',
            forbidden: []
        },
        {
            id: 'm15',
            name: '黑椒牛柳',
            category: 'meat',
            tags: ['炒', '牛肉', '西式'],
            ingredients: ['牛肉', '青椒', '洋葱', '黑胡椒', '生抽'],
            time: '20分钟',
            difficulty: '中等',
            method: '牛肉切条腌制，青椒洋葱切丝，先炒牛肉盛出，炒配菜，回锅调味',
            note: '需要腌制',
            forbidden: []
        },
        {
            id: 'm16',
            name: '爆炒鱿鱼',
            category: 'meat',
            tags: ['海鲜', '炒', '快手'],
            ingredients: ['鱿鱼', '青椒', '洋葱', '姜', '料酒', '生抽'],
            time: '10分钟',
            difficulty: '简单',
            method: '鱿鱼解冻切花刀焯水，青椒洋葱切丝，大火爆炒，调味出锅',
            note: '冷冻鱿鱼可用',
            forbidden: []
        },
        {
            id: 'm17',
            name: '鱿鱼炒韭菜',
            category: 'meat',
            tags: ['海鲜', '炒'],
            ingredients: ['鱿鱼', '韭菜', '姜', '料酒', '生抽'],
            time: '12分钟',
            difficulty: '简单',
            method: '鱿鱼解冻切条焯水，韭菜切段，大火爆炒，调味',
            note: '经典搭配',
            forbidden: []
        },
        {
            id: 'm18',
            name: '香煎三文鱼',
            category: 'meat',
            tags: ['海鲜', '煎'],
            ingredients: ['三文鱼', '黄油', '柠檬', '黑胡椒', '盐'],
            time: '15分钟',
            difficulty: '简单',
            method: '三文鱼擦干，黄油中小火煎至两面金黄，撒盐和黑胡椒，挤柠檬',
            note: '外酥里嫩',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm19',
            name: '烤鸡翅',
            category: 'meat',
            tags: ['烤', '鸡肉'],
            ingredients: ['鸡翅', '生抽', '蚝油', '蜂蜜', '蒜', '黑胡椒'],
            time: '40分钟',
            difficulty: '简单',
            method: '鸡翅划刀腌制30分钟，烤箱200度烤25分钟，中途刷蜂蜜水',
            note: '需要烤箱',
            forbidden: []
        },
        {
            id: 'm20',
            name: '可乐鸡翅',
            category: 'meat',
            tags: ['炖', '鸡肉', '甜口'],
            ingredients: ['鸡翅', '可乐', '生抽', '老抽', '姜'],
            time: '30分钟',
            difficulty: '简单',
            method: '鸡翅焯水，煎至金黄，加可乐和调料，小火炖20分钟收汁',
            note: '孩子爱吃',
            forbidden: []
        },
        {
            id: 'm21',
            name: '蒜蓉粉丝蒸虾',
            category: 'meat',
            tags: ['海鲜', '蒸'],
            ingredients: ['虾', '粉丝', '蒜蓉', '生抽', '葱'],
            time: '15分钟',
            difficulty: '简单',
            method: '粉丝泡软铺底，虾去虾线摆盘，撒蒜蓉，蒸8分钟，淋生抽热油',
            note: '鲜香味美',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm22',
            name: '白灼虾',
            category: 'meat',
            tags: ['海鲜', '清淡'],
            ingredients: ['虾', '姜', '葱', '料酒', '生抽'],
            time: '10分钟',
            difficulty: '简单',
            method: '水加姜葱料酒烧开，放入虾煮2-3分钟变色，蘸生抽',
            note: '最鲜美的做法',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm23',
            name: '红烧肉',
            category: 'meat',
            tags: ['红烧', '猪肉', '经典'],
            ingredients: ['五花肉', '生抽', '老抽', '冰糖', '姜', '八角'],
            time: '60分钟',
            difficulty: '中等',
            method: '五花肉切块焯水，炒糖色，下肉翻炒，加调料和水，小火炖45分钟',
            note: '经典家常菜',
            forbidden: []
        },
        {
            id: 'm24',
            name: '糖醋排骨',
            category: 'meat',
            tags: ['糖醋', '猪肉'],
            ingredients: ['排骨', '糖', '醋', '生抽', '料酒', '姜'],
            time: '50分钟',
            difficulty: '中等',
            method: '排骨焯水，煎至金黄，加糖醋汁和水，小火炖40分钟收汁',
            note: '酸甜可口',
            forbidden: ['排骨汤']
        },
        {
            id: 'm25',
            name: '粉蒸肉',
            category: 'meat',
            tags: ['蒸', '猪肉'],
            ingredients: ['五花肉', '蒸肉米粉', '生抽', '料酒', '姜'],
            time: '60分钟',
            difficulty: '中等',
            method: '五花肉切片腌制，裹蒸肉米粉，铺盘蒸60分钟',
            note: '软糯香嫩',
            forbidden: []
        },
        {
            id: 'm26',
            name: '狮子头',
            category: 'meat',
            tags: ['炖', '猪肉'],
            ingredients: ['猪肉馅', '鸡蛋', '淀粉', '生抽', '葱', '姜'],
            time: '60分钟',
            difficulty: '中等',
            method: '肉馅加调料搅打上劲，做成大丸子，煎至定型，加水炖煮',
            note: '需要肉馅',
            forbidden: ['红烧狮子头']
        },
        {
            id: 'm27',
            name: '肉末蒸蛋',
            category: 'meat',
            tags: ['蒸', '快手'],
            ingredients: ['猪肉馅', '鸡蛋', '生抽', '葱', '香油'],
            time: '20分钟',
            difficulty: '简单',
            method: '鸡蛋打散加温水，先蒸10分钟定型，加炒熟的肉末，再蒸5分钟',
            note: '嫩滑下饭',
            forbidden: []
        },
        {
            id: 'm28',
            name: '蚂蚁上树',
            category: 'meat',
            tags: ['炒', '粉丝'],
            ingredients: ['猪肉馅', '粉丝', '豆瓣酱', '葱', '姜'],
            time: '20分钟',
            difficulty: '简单',
            method: '粉丝泡软，肉馅炒熟，加豆瓣酱炒香，加粉丝拌匀',
            note: '麻辣鲜香',
            forbidden: []
        },
        {
            id: 'm29',
            name: '宫保鸡丁',
            category: 'meat',
            tags: ['炒', '鸡肉', '经典'],
            ingredients: ['鸡胸肉', '花生米', '干辣椒', '葱', '生抽', '醋', '糖'],
            time: '25分钟',
            difficulty: '中等',
            method: '鸡肉切丁腌制，炒熟盛出，炒香辣椒花生，回锅鸡丁，淋宫保汁',
            note: '经典川菜',
            forbidden: []
        },
        {
            id: 'm30',
            name: '辣子鸡',
            category: 'meat',
            tags: ['炸', '鸡肉', '辣'],
            ingredients: ['鸡肉', '干辣椒', '花椒', '葱', '姜', '料酒'],
            time: '40分钟',
            difficulty: '中等',
            method: '鸡肉切块腌制，炸至金黄，炒香辣椒花椒，下鸡块炒匀',
            note: '麻辣干香',
            forbidden: []
        },
        {
            id: 'm31',
            name: '口水鸡',
            category: 'meat',
            tags: ['凉拌', '鸡肉'],
            ingredients: ['鸡腿', '辣椒油', '花椒粉', '生抽', '醋', '蒜', '花生碎'],
            time: '30分钟',
            difficulty: '中等',
            method: '鸡腿煮熟冰镇，撕成丝，淋上调好的红油酱汁，撒花生',
            note: '麻辣鲜香',
            forbidden: ['凉拌黄瓜']
        },
        {
            id: 'm32',
            name: '咖喱鸡肉',
            category: 'meat',
            tags: ['炖', '鸡肉', '咖喱'],
            ingredients: ['鸡肉', '土豆', '洋葱', '胡萝卜', '咖喱块'],
            time: '40分钟',
            difficulty: '简单',
            method: '鸡肉切块炒熟，加蔬菜翻炒，加水和咖喱块，炖20分钟',
            note: '浓郁下饭',
            forbidden: []
        },
        {
            id: 'm33',
            name: '照烧鸡腿',
            category: 'meat',
            tags: ['煎', '鸡肉', '日式'],
            ingredients: ['鸡腿', '生抽', '料酒', '蜂蜜', '姜'],
            time: '30分钟',
            difficulty: '简单',
            method: '鸡腿去骨煎至金黄，倒入照烧汁，小火焖10分钟收汁',
            note: '甜咸适口',
            forbidden: []
        },
        {
            id: 'm34',
            name: '酸菜鱼',
            category: 'meat',
            tags: ['煮', '鱼片'],
            ingredients: ['鱼片', '酸菜', '泡椒', '姜', '花椒', '辣椒'],
            time: '30分钟',
            difficulty: '中等',
            method: '鱼片腌制，炒香酸菜泡椒，加水煮开，下鱼片煮熟',
            note: '酸辣开胃',
            forbidden: ['鱼汤']
        },
        {
            id: 'm35',
            name: '水煮肉片',
            category: 'meat',
            tags: ['煮', '猪肉', '辣'],
            ingredients: ['猪肉片', '豆芽', '干辣椒', '花椒', '豆瓣酱', '姜', '蒜'],
            time: '30分钟',
            difficulty: '中等',
            method: '肉片腌制，炒香豆瓣酱加水煮开，下肉片和蔬菜，淋热油',
            note: '麻辣鲜香',
            forbidden: ['干锅']
        },
        {
            id: 'm36',
            name: '鱼香肉丝',
            category: 'meat',
            tags: ['炒', '猪肉', '经典'],
            ingredients: ['猪肉丝', '木耳', '笋丝', '胡萝卜', '豆瓣酱', '生抽', '醋', '糖'],
            time: '25分钟',
            difficulty: '中等',
            method: '肉丝腌制炒熟盛出，炒香豆瓣酱和配菜，回锅肉丝，淋鱼香汁',
            note: '鱼香味型',
            forbidden: []
        },
        {
            id: 'm37',
            name: '青椒肉丝',
            category: 'meat',
            tags: ['炒', '猪肉', '快手'],
            ingredients: ['猪肉丝', '青椒', '生抽', '料酒', '淀粉'],
            time: '15分钟',
            difficulty: '简单',
            method: '肉丝腌制炒至变色盛出，炒青椒，回锅肉丝，调味',
            note: '家常快手',
            forbidden: []
        },
        {
            id: 'm38',
            name: '回锅肉',
            category: 'meat',
            tags: ['炒', '猪肉', '经典'],
            ingredients: ['五花肉', '青椒', '豆瓣酱', '生抽', '糖'],
            time: '25分钟',
            difficulty: '中等',
            method: '五花肉煮熟切片，煎至出油卷起，加豆瓣酱炒香，加青椒炒匀',
            note: '川菜经典',
            forbidden: ['回锅肉']
        },
        {
            id: 'm39',
            name: '韭菜炒蛋',
            category: 'meat',
            tags: ['炒', '蛋', '快手'],
            ingredients: ['韭菜', '鸡蛋', '盐'],
            time: '8分钟',
            difficulty: '简单',
            method: '韭菜切段，鸡蛋炒熟盛出，炒韭菜，回锅鸡蛋，调味',
            note: '简单美味',
            forbidden: []
        },
        {
            id: 'm40',
            name: '虾仁炒蛋',
            category: 'meat',
            tags: ['炒', '海鲜', '蛋'],
            ingredients: ['虾仁', '鸡蛋', '葱', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '虾仁解冻，鸡蛋打散，先炒虾仁，倒入蛋液炒熟',
            note: '嫩滑鲜美',
            forbidden: ['带鱼', '鲫鱼', '鱼汤']
        },
        {
            id: 'm41',
            name: '滑蛋牛肉',
            category: 'meat',
            tags: ['炒', '牛肉', '粤菜'],
            ingredients: ['牛肉', '鸡蛋', '生抽', '淀粉', '油'],
            time: '15分钟',
            difficulty: '中等',
            method: '牛肉腌制炒至变色盛出，鸡蛋打散，倒入牛肉，小火推熟',
            note: '嫩滑无比',
            forbidden: []
        },
        {
            id: 'm42',
            name: '黑椒牛排',
            category: 'meat',
            tags: ['煎', '牛肉', '西式'],
            ingredients: ['牛排', '黑胡椒', '盐', '黄油', '蒜'],
            time: '15分钟',
            difficulty: '简单',
            method: '牛排回温，撒盐和黑胡椒，热锅煎3-4分钟每面，加黄油蒜瓣',
            note: '需要牛排',
            forbidden: []
        },
        {
            id: 'm43',
            name: '番茄牛腩',
            category: 'meat',
            tags: ['炖', '牛肉', '番茄'],
            ingredients: ['牛腩', '西红柿', '洋葱', '生抽', '料酒', '姜'],
            time: '90分钟',
            difficulty: '中等',
            method: '牛腩焯水，炒番茄出汁，加牛腩和水，小火炖1.5小时',
            note: '软烂入味',
            forbidden: []
        },
        {
            id: 'm44',
            name: '酱牛肉',
            category: 'meat',
            tags: ['卤', '牛肉'],
            ingredients: ['牛腱子', '生抽', '老抽', '料酒', '八角', '桂皮', '姜'],
            time: '120分钟',
            difficulty: '中等',
            method: '牛肉焯水，加所有调料和水，小火卤2小时，浸泡过夜',
            note: '冷吃更佳',
            forbidden: []
        },
        {
            id: 'm45',
            name: '猪肚炒青椒',
            category: 'meat',
            tags: ['炒', '猪肚'],
            ingredients: ['猪肚', '青椒', '蒜', '生抽', '料酒'],
            time: '20分钟',
            difficulty: '简单',
            method: '猪肚切丝焯水，青椒切丝，蒜爆香，同炒调味',
            note: '冷冻猪肚可用',
            forbidden: []
        },
        {
            id: 'm46',
            name: '猪肚鸡',
            category: 'meat',
            tags: ['炖', '猪肚', '鸡肉'],
            ingredients: ['猪肚', '鸡肉', '姜', '葱', '胡椒'],
            time: '90分钟',
            difficulty: '中等',
            method: '猪肚洗净焯水，鸡肉焯水，一起炖煮1.5小时，调味',
            note: '滋补暖胃',
            forbidden: ['鸡汤', '鸭汤', '鱼汤']
        },
        {
            id: 'm47',
            name: '爆炒猪肝',
            category: 'meat',
            tags: ['炒', '猪肝'],
            ingredients: ['猪肝', '青椒', '洋葱', '姜', '料酒', '生抽'],
            time: '15分钟',
            difficulty: '中等',
            method: '猪肝切片腌制，焯水去血，大火爆炒配菜，快速翻炒出锅',
            note: '补血佳品',
            forbidden: []
        },
        {
            id: 'm48',
            name: '卤蛋',
            category: 'meat',
            tags: ['卤', '蛋'],
            ingredients: ['鸡蛋', '生抽', '老抽', '八角', '桂皮', '茶叶'],
            time: '40分钟',
            difficulty: '简单',
            method: '鸡蛋煮熟剥壳，加所有调料和水，小火煮30分钟，浸泡入味',
            note: '提前准备',
            forbidden: []
        },
        {
            id: 'm49',
            name: '煎蛋',
            category: 'meat',
            tags: ['煎', '蛋', '快手'],
            ingredients: ['鸡蛋', '盐', '油'],
            time: '3分钟',
            difficulty: '简单',
            method: '热锅少油，打入鸡蛋，小火煎至蛋白凝固，撒盐',
            note: '最简单',
            forbidden: []
        },
        {
            id: 'm50',
            name: '蒸蛋羹',
            category: 'meat',
            tags: ['蒸', '蛋', '清淡'],
            ingredients: ['鸡蛋', '温水', '盐', '生抽', '香油'],
            time: '15分钟',
            difficulty: '简单',
            method: '鸡蛋打散加温水和盐，过滤气泡，蒸12分钟，淋生抽香油',
            note: '嫩滑如豆腐',
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
        },
        {
            id: 's6',
            name: '丝瓜蛋汤',
            category: 'soup',
            tags: ['清淡', '快手'],
            ingredients: ['丝瓜', '鸡蛋', '盐', '香油'],
            time: '10分钟',
            difficulty: '简单',
            method: '丝瓜去皮切块，水烧开，放入丝瓜煮软，淋入蛋液，调味',
            note: '清甜爽口',
            forbidden: []
        },
        {
            id: 's7',
            name: '蘑菇蛋汤',
            category: 'soup',
            tags: ['清淡', '快手'],
            ingredients: ['口蘑', '鸡蛋', '葱', '盐', '香油'],
            time: '10分钟',
            difficulty: '简单',
            method: '口蘑切片，水烧开，放入口蘑煮5分钟，淋入蛋液，调味',
            note: '鲜美可口',
            forbidden: []
        },
        {
            id: 's8',
            name: '海带豆腐汤',
            category: 'soup',
            tags: ['清淡', '营养'],
            ingredients: ['海带', '豆腐', '姜', '盐', '香油'],
            time: '15分钟',
            difficulty: '简单',
            method: '海带泡软，豆腐切块，水烧开，放入海带豆腐煮10分钟，调味',
            note: '补钙佳品',
            forbidden: []
        },
        {
            id: 's9',
            name: '萝卜丝煎蛋汤',
            category: 'soup',
            tags: ['清淡', '快手'],
            ingredients: ['白萝卜', '鸡蛋', '葱', '盐', '白胡椒'],
            time: '15分钟',
            difficulty: '简单',
            method: '萝卜切丝，先煎鸡蛋，加水烧开，放入萝卜丝煮软，调味',
            note: '鲜美暖胃',
            forbidden: []
        },
        {
            id: 's10',
            name: '菠菜蛋汤',
            category: 'soup',
            tags: ['清淡', '快手'],
            ingredients: ['菠菜', '鸡蛋', '盐', '香油'],
            time: '10分钟',
            difficulty: '简单',
            method: '菠菜洗净，水烧开，放入菠菜煮软，淋入蛋液，调味',
            note: '补铁佳品',
            forbidden: ['菠菜豆腐汤']
        },
        {
            id: 's11',
            name: '酸辣汤',
            category: 'soup',
            tags: ['酸辣', '开胃'],
            ingredients: ['豆腐', '木耳', '香菇', '鸡蛋', '醋', '白胡椒', '淀粉'],
            time: '20分钟',
            difficulty: '简单',
            method: '豆腐木耳香菇切丝，水烧开，放入食材煮5分钟，勾芡，淋蛋液，加醋和胡椒',
            note: '开胃暖身',
            forbidden: ['西湖牛肉羹']
        },
        {
            id: 's12',
            name: '西红柿鸡蛋汤',
            category: 'soup',
            tags: ['清淡', '快手'],
            ingredients: ['西红柿', '鸡蛋', '葱', '盐', '香油'],
            time: '10分钟',
            difficulty: '简单',
            method: '西红柿切块炒出汁，加水烧开，淋入蛋液，调味',
            note: '经典家常',
            forbidden: []
        },
        {
            id: 's13',
            name: '莲藕排骨汤',
            category: 'soup',
            tags: ['滋补', '汤'],
            ingredients: ['莲藕', '排骨', '姜', '葱', '盐'],
            time: '90分钟',
            difficulty: '中等',
            method: '排骨焯水，莲藕切块，一起炖煮1.5小时，调味',
            note: '需要排骨',
            forbidden: ['藕']
        },
        {
            id: 's14',
            name: '玉米浓汤',
            category: 'soup',
            tags: ['西式', '甜汤'],
            ingredients: ['玉米', '牛奶', '黄油', '面粉', '盐'],
            time: '30分钟',
            difficulty: '中等',
            method: '玉米粒打碎，黄油炒面粉，加牛奶和玉米，煮至浓稠，调味',
            note: '西式浓汤',
            forbidden: []
        },
        {
            id: 's15',
            name: '南瓜汤',
            category: 'soup',
            tags: ['甜汤', '营养'],
            ingredients: ['南瓜', '牛奶', '黄油', '盐'],
            time: '30分钟',
            difficulty: '简单',
            method: '南瓜蒸熟，加牛奶打成泥，回锅加热，调味',
            note: '香甜浓郁',
            forbidden: []
        },
        {
            id: 's16',
            name: '银耳莲子汤',
            category: 'soup',
            tags: ['甜汤', '滋补'],
            ingredients: ['银耳', '莲子', '冰糖', '枸杞'],
            time: '60分钟',
            difficulty: '简单',
            method: '银耳莲子泡发，加水炖煮1小时，加冰糖枸杞',
            note: '美容养颜',
            forbidden: []
        },
        {
            id: 's17',
            name: '酒酿圆子',
            category: 'soup',
            tags: ['甜汤', '快手'],
            ingredients: ['汤圆', '酒酿', '冰糖', '桂花'],
            time: '15分钟',
            difficulty: '简单',
            method: '汤圆煮熟，加酒酿和冰糖，撒桂花',
            note: '冷冻汤圆可用',
            forbidden: []
        },
        {
            id: 's18',
            name: '酸辣肚丝汤',
            category: 'soup',
            tags: ['酸辣', '汤'],
            ingredients: ['猪肚', '笋丝', '木耳', '醋', '白胡椒', '淀粉'],
            time: '30分钟',
            difficulty: '中等',
            method: '猪肚切丝，炒香配料，加水煮开，勾芡，加醋和胡椒',
            note: '冷冻猪肚可用',
            forbidden: []
        },
        {
            id: 's19',
            name: '味噌汤',
            category: 'soup',
            tags: ['日式', '快手'],
            ingredients: ['味噌', '豆腐', '海带', '葱花'],
            time: '10分钟',
            difficulty: '简单',
            method: '水烧开，放入豆腐和海带，关火，加入味噌化开，撒葱花',
            note: '日式家常',
            forbidden: []
        },
        {
            id: 's20',
            name: '罗宋汤',
            category: 'soup',
            tags: ['西式', '营养'],
            ingredients: ['牛肉', '西红柿', '洋葱', '土豆', '胡萝卜', '卷心菜'],
            time: '90分钟',
            difficulty: '中等',
            method: '牛肉炖煮1小时，加蔬菜再煮30分钟，调味',
            note: '浓郁营养',
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
        },
        {
            id: 'v14',
            name: '蒜蓉西兰花',
            category: 'veg',
            tags: ['快手', '炒', '健康'],
            ingredients: ['西兰花', '蒜', '盐', '油'],
            time: '8分钟',
            difficulty: '简单',
            method: '西兰花掰小朵焯水，蒜爆香，大火快炒，调味',
            note: '营养健康',
            forbidden: []
        },
        {
            id: 'v15',
            name: '蚝油生菜',
            category: 'veg',
            tags: ['快手', '炒'],
            ingredients: ['生菜', '蒜', '蚝油', '生抽'],
            time: '5分钟',
            difficulty: '简单',
            method: '生菜洗净，蒜爆香，大火快炒，淋蚝油',
            note: '清脆爽口',
            forbidden: []
        },
        {
            id: 'v16',
            name: '干煸豆角',
            category: 'veg',
            tags: ['炒', '干煸'],
            ingredients: ['四季豆', '干辣椒', '花椒', '蒜', '生抽'],
            time: '15分钟',
            difficulty: '中等',
            method: '豆角切段，干煸至虎皮状，加辣椒花椒蒜炒香，调味',
            note: '干香下饭',
            forbidden: ['干锅']
        },
        {
            id: 'v17',
            name: '麻婆豆腐',
            category: 'veg',
            tags: ['烧', '辣', '经典'],
            ingredients: ['嫩豆腐', '豆瓣酱', '花椒粉', '葱', '姜', '蒜'],
            time: '20分钟',
            difficulty: '中等',
            method: '豆腐切块焯水，炒香豆瓣酱，加水煮开，放入豆腐，勾芡撒花椒粉',
            note: '麻辣鲜香',
            forbidden: []
        },
        {
            id: 'v18',
            name: '家常豆腐',
            category: 'veg',
            tags: ['烧', '香'],
            ingredients: ['豆腐', '木耳', '胡萝卜', '生抽', '糖', '葱'],
            time: '20分钟',
            difficulty: '简单',
            method: '豆腐切块煎至金黄，加配菜和调料，烧入味',
            note: '香嫩可口',
            forbidden: []
        },
        {
            id: 'v19',
            name: '红烧茄子',
            category: 'veg',
            tags: ['烧', '下饭'],
            ingredients: ['茄子', '蒜', '生抽', '糖', '醋', '淀粉'],
            time: '20分钟',
            difficulty: '中等',
            method: '茄子切条用盐杀水，少油煎软，加调味汁烧入味',
            note: '少油版',
            forbidden: ['地三鲜']
        },
        {
            id: 'v20',
            name: '虎皮青椒',
            category: 'veg',
            tags: ['煎', '辣'],
            ingredients: ['青椒', '蒜', '生抽', '醋', '糖'],
            time: '15分钟',
            difficulty: '简单',
            method: '青椒整根干煎至虎皮，加调味汁焖入味',
            note: '酸辣开胃',
            forbidden: []
        },
        {
            id: 'v21',
            name: '糖醋藕片',
            category: 'veg',
            tags: ['炒', '糖醋'],
            ingredients: ['藕', '糖', '醋', '生抽', '淀粉'],
            time: '15分钟',
            difficulty: '简单',
            method: '藕切片，焯水，加糖醋汁炒匀',
            note: '酸甜脆爽',
            forbidden: ['藕']
        },
        {
            id: 'v22',
            name: '荷塘月色',
            category: 'veg',
            tags: ['炒', '清爽'],
            ingredients: ['藕', '木耳', '荷兰豆', '胡萝卜', '盐'],
            time: '15分钟',
            difficulty: '简单',
            method: '所有食材切片焯水，大火快炒，调味',
            note: '色彩丰富',
            forbidden: ['藕', '荷兰豆']
        },
        {
            id: 'v23',
            name: '凉拌木耳',
            category: 'veg',
            tags: ['凉拌', '快手'],
            ingredients: ['木耳', '蒜', '生抽', '醋', '香油', '辣椒油'],
            time: '15分钟',
            difficulty: '简单',
            method: '木耳泡发焯水，加所有调料拌匀',
            note: '爽口开胃',
            forbidden: ['凉拌黄瓜', '凉拌腐竹']
        },
        {
            id: 'v24',
            name: '凉拌海带丝',
            category: 'veg',
            tags: ['凉拌', '快手'],
            ingredients: ['海带', '蒜', '生抽', '醋', '香油', '辣椒油'],
            time: '15分钟',
            difficulty: '简单',
            method: '海带泡软切丝焯水，加调料拌匀',
            note: '清爽下饭',
            forbidden: ['凉拌黄瓜']
        },
        {
            id: 'v25',
            name: '拍黄瓜',
            category: 'veg',
            tags: ['凉拌', '快手'],
            ingredients: ['黄瓜', '蒜', '生抽', '醋', '香油'],
            time: '5分钟',
            difficulty: '简单',
            method: '黄瓜拍碎切段，加调料拌匀',
            note: '夏日必备',
            forbidden: ['凉拌黄瓜']
        },
        {
            id: 'v26',
            name: '糖拌西红柿',
            category: 'veg',
            tags: ['凉拌', '甜'],
            ingredients: ['西红柿', '糖'],
            time: '5分钟',
            difficulty: '简单',
            method: '西红柿切片，撒糖，腌制10分钟',
            note: '清甜爽口',
            forbidden: []
        },
        {
            id: 'v27',
            name: '松仁玉米',
            category: 'veg',
            tags: ['炒', '甜'],
            ingredients: ['玉米粒', '松仁', '胡萝卜', '盐', '糖'],
            time: '10分钟',
            difficulty: '简单',
            method: '玉米粒胡萝卜丁炒熟，加松仁，调味',
            note: '香甜可口',
            forbidden: []
        },
        {
            id: 'v28',
            name: '玉米炒蛋',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['玉米粒', '鸡蛋', '葱', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '鸡蛋炒熟盛出，炒玉米粒，回锅鸡蛋，调味',
            note: '简单美味',
            forbidden: []
        },
        {
            id: 'v29',
            name: '拔丝地瓜',
            category: 'veg',
            tags: ['炸', '甜'],
            ingredients: ['红薯', '糖', '油'],
            time: '30分钟',
            difficulty: '中等',
            method: '红薯切块炸熟，炒糖至金黄，倒入红薯拌匀',
            note: '甜蜜诱人',
            forbidden: []
        },
        {
            id: 'v30',
            name: '蒸南瓜',
            category: 'veg',
            tags: ['蒸', '甜'],
            ingredients: ['南瓜', '红枣', '枸杞'],
            time: '20分钟',
            difficulty: '简单',
            method: '南瓜切块摆盘，蒸20分钟，撒红枣枸杞',
            note: '香甜软糯',
            forbidden: []
        },
        {
            id: 'v31',
            name: '蒜蓉蒸茄子',
            category: 'veg',
            tags: ['蒸', '香'],
            ingredients: ['茄子', '蒜', '生抽', '香油', '葱'],
            time: '20分钟',
            difficulty: '简单',
            method: '茄子切条蒸15分钟，淋蒜蓉生抽香油',
            note: '少油健康',
            forbidden: ['地三鲜']
        },
        {
            id: 'v32',
            name: '烤红薯',
            category: 'veg',
            tags: ['烤', '甜'],
            ingredients: ['红薯'],
            time: '60分钟',
            difficulty: '简单',
            method: '红薯洗净，烤箱200度烤1小时',
            note: '冬日必备',
            forbidden: []
        },
        {
            id: 'v33',
            name: '炒土豆丝',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['土豆', '醋', '辣椒', '蒜', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '土豆切丝泡水，大火快炒，加醋调味',
            note: '酸辣爽口',
            forbidden: []
        },
        {
            id: 'v34',
            name: '土豆泥',
            category: 'veg',
            tags: ['煮', '西式'],
            ingredients: ['土豆', '牛奶', '黄油', '盐', '黑胡椒'],
            time: '30分钟',
            difficulty: '简单',
            method: '土豆煮熟压泥，加牛奶黄油拌匀，调味',
            note: '细腻香滑',
            forbidden: []
        },
        {
            id: 'v35',
            name: '地三鲜',
            category: 'veg',
            tags: ['炒', '东北菜'],
            ingredients: ['茄子', '土豆', '青椒', '生抽', '糖', '淀粉'],
            time: '25分钟',
            difficulty: '中等',
            method: '三种食材分别过油，回锅加调味汁炒匀',
            note: '经典东北菜',
            forbidden: ['地三鲜']
        },
        {
            id: 'v36',
            name: '香菇菜心',
            category: 'veg',
            tags: ['炒', '清爽'],
            ingredients: ['菜心', '香菇', '蒜', '生抽', '蚝油'],
            time: '15分钟',
            difficulty: '简单',
            method: '菜心焯水，香菇切片炒香，加菜心炒匀，调味',
            note: '清淡鲜美',
            forbidden: []
        },
        {
            id: 'v37',
            name: '莴笋炒蛋',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['莴笋', '鸡蛋', '蒜', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '莴笋切片，鸡蛋炒熟盛出，炒莴笋，回锅鸡蛋，调味',
            note: '清脆可口',
            forbidden: []
        },
        {
            id: 'v38',
            name: '芹菜炒香干',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['芹菜', '香干', '蒜', '生抽', '盐'],
            time: '10分钟',
            difficulty: '简单',
            method: '芹菜切段，香干切片，大火快炒，调味',
            note: '清爽下饭',
            forbidden: ['凉拌腐竹']
        },
        {
            id: 'v39',
            name: '毛豆炒蛋',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['毛豆', '鸡蛋', '盐'],
            time: '15分钟',
            difficulty: '简单',
            method: '毛豆煮熟，鸡蛋炒熟，回锅毛豆，调味',
            note: '营养均衡',
            forbidden: []
        },
        {
            id: 'v40',
            name: '葱油拌面',
            category: 'veg',
            tags: ['拌', '快手'],
            ingredients: ['面条', '葱', '生抽', '糖', '油'],
            time: '15分钟',
            difficulty: '简单',
            method: '炸香葱油，煮面，淋葱油拌匀',
            note: '上海特色',
            forbidden: []
        },
        {
            id: 'v41',
            name: '蛋炒饭',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['米饭', '鸡蛋', '葱', '盐', '生抽'],
            time: '10分钟',
            difficulty: '简单',
            method: '鸡蛋炒熟，加米饭炒散，加生抽调味，撒葱花',
            note: '剩饭好去处',
            forbidden: []
        },
        {
            id: 'v42',
            name: '酱油炒饭',
            category: 'veg',
            tags: ['炒', '快手'],
            ingredients: ['米饭', '鸡蛋', '生抽', '老抽', '葱'],
            time: '10分钟',
            difficulty: '简单',
            method: '鸡蛋炒熟，加米饭，加酱油炒匀，撒葱花',
            note: '色泽诱人',
            forbidden: []
        },
        {
            id: 'v43',
            name: '扬州炒饭',
            category: 'veg',
            tags: ['炒', '经典'],
            ingredients: ['米饭', '鸡蛋', '胡萝卜', '青豆', '玉米', '火腿'],
            time: '15分钟',
            difficulty: '中等',
            method: '所有配料切丁炒熟，加米饭炒匀，调味',
            note: '配料丰富',
            forbidden: []
        },
        {
            id: 'v44',
            name: '小米粥',
            category: 'veg',
            tags: ['煮', '早餐'],
            ingredients: ['小米', '水'],
            time: '30分钟',
            difficulty: '简单',
            method: '小米洗净，加水煮至浓稠',
            note: '养胃早餐',
            forbidden: []
        },
        {
            id: 'v45',
            name: '皮蛋瘦肉粥',
            category: 'veg',
            tags: ['煮', '早餐'],
            ingredients: ['大米', '皮蛋', '瘦肉丝', '姜', '葱'],
            time: '40分钟',
            difficulty: '中等',
            method: '大米煮粥，加入肉丝和皮蛋，调味撒葱花',
            note: '经典早餐',
            forbidden: []
        },
        {
            id: 'v46',
            name: '南瓜粥',
            category: 'veg',
            tags: ['煮', '甜'],
            ingredients: ['大米', '南瓜', '冰糖'],
            time: '40分钟',
            difficulty: '简单',
            method: '南瓜切块和大米一起煮，煮至软烂',
            note: '香甜暖胃',
            forbidden: []
        },
        {
            id: 'v47',
            name: '蒸蛋',
            category: 'veg',
            tags: ['蒸', '快手'],
            ingredients: ['鸡蛋', '温水', '盐', '生抽'],
            time: '15分钟',
            difficulty: '简单',
            method: '鸡蛋打散加温水，蒸12分钟，淋生抽',
            note: '嫩滑可口',
            forbidden: []
        },
        {
            id: 'v48',
            name: '卤蛋',
            category: 'veg',
            tags: ['卤', '小菜'],
            ingredients: ['鸡蛋', '生抽', '老抽', '八角', '桂皮'],
            time: '40分钟',
            difficulty: '简单',
            method: '鸡蛋煮熟剥壳，加调料水煮30分钟，浸泡过夜',
            note: '提前准备',
            forbidden: []
        },
        {
            id: 'v49',
            name: '茶叶蛋',
            category: 'veg',
            tags: ['卤', '小吃'],
            ingredients: ['鸡蛋', '茶叶', '生抽', '老抽', '八角', '桂皮'],
            time: '60分钟',
            difficulty: '简单',
            method: '鸡蛋煮熟敲裂，加所有调料水煮1小时，浸泡过夜',
            note: '香气浓郁',
            forbidden: []
        },
        {
            id: 'v50',
            name: '白灼菜心',
            category: 'veg',
            tags: ['煮', '清淡'],
            ingredients: ['菜心', '生抽', '蚝油', '蒜'],
            time: '5分钟',
            difficulty: '简单',
            method: '菜心焯水，摆盘，淋生抽蚝油蒜蓉',
            note: '粤菜经典',
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
