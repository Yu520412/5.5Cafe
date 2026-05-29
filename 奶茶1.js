// ==========================================
// 🏪 店铺基础信息配置 (Store Configuration)
// ==========================================
// 每次换地址或联系方式，只需要修改这里的双引号里面的内容即可！
const shopConfig = {
    instagram: "https://instagram.com/5point5cafeshop",
    whatsapp: "https://wa.me/60126195988",
    // facebook: "https://facebook.com/your_page",  // 更改并保持注释状态
    googleMaps: "https://maps.app.goo.gl/sugrt9Vv5wFxvExz9",
    address: "2G Jalan Bayu Tinggi 2 Klang, 41200 Botanik Klang, Selangor"
};

/**
 * Language Translations / 语言翻译数据 / Data terjemahan bahasa
 * Stores translations for Chinese (zh), English (en), and Malay (ms).
 * 存储中文、英文和马来文的翻译数据。
 */
const translations = {
    'zh': {
        'copy_address': '复制地址',
        'copied': '已复制地址！',
        'copy_failed': '复制失败，请手动复制地址。',
        'menu_category': '饮品分类',
        'B1': '招牌推荐',
        'B2': '水果茶系列',
        'B3': '奶茶系列',
        'B4': '总菜单',
        'B5': '特色甜点',
        'B6': '气泡系列',

        // 招牌推荐
        'ZP1': '草莓泰式绿奶',
        'ZP2': '泰式奶茶',
        'ZP3': '葡萄柠檬茶',
        'ZP4': '黑芝麻冰沙',
        'ZP5': '5.5 冰淇淋',
        'ZP6': 'Duang Duang 兔兔',
        // 水果茶系列
        'SG1': '柠檬水',
        'SG2': '百香果茶',
        // 奶茶系列
        'NC1': '草莓泰式绿奶',
        'NC2': '泰式奶茶',
        // 总菜单
        'BT_1': '水果茶系列',
        'ZD1': '新鲜柠檬水',
        'ZD2': '草莓柠檬水',
        'ZD3': '番石榴柠檬茶',
        'ZD4': '野酸角汁',
        'ZD5': '草莓茉莉茶',
        'ZD6': '草莓泰式绿茶',
        'ZD7': '泰式柠檬红茶',
        'ZD8': '泰式柠檬绿茶',
        'ZD9': '葡萄柠檬茶',
        'ZD10': '冬季茉莉茶',
        'ZD11': '百香果茶',
        'ZD12': '芒果茶',

        'BT_2': '奶茶系列',
        'ZD13': '经典奶茶',
        'ZD14': '黑糖珍珠奶茶',
        'ZD15': '泰式奶茶',
        'ZD16': '泰式绿奶茶',
        'ZD17': '草莓泰式绿茶',
        'ZD18': '草莓抹茶奶茶',

        'BT_3': '冰淇淋系列',
        'ZD19': '5.5 冰淇淋',
        'ZD20': '原味圣代',
        'ZD21': '黑糖圣代',
        'ZD22': '草莓圣代',
        'ZD23': '巧克力圣代',
        'ZD24': '芒果圣代',

        'BT_4': '冰沙系列',
        'ZD25': '黑芝麻冰沙',
        'ZD26': '花生冰沙',
        'ZD27': '草莓冰沙',
        'ZD28': '百香果冰沙',

        'BT_5': '特色甜点',
        'ZD29': 'Duang Duang 兔兔',
        'ZD30': '山楂甜点',
        'ZD31': '红豆甜点',
        'ZD32': '桃子甜点',

        'BT_6': '气泡系列',
        'ZD33': '嫣红杨梅气泡饮',
        'ZD34': '粉红葡萄柚气泡饮',
        'ZD35': '鲜柠气泡饮',
        'ZD36': '桃花苏打',
        'ZD37': '热带百香果气泡饮',
        'ZD38': '芭乐微风',
        'ZD39': '芒果爆爆气泡饮',
        'ZD40': '石榴气泡饮',

        // 特色甜点
        'TS1': '5.5 冰淇淋',
        'TS2': 'Duang Duang 兔兔',
        // 冰沙系列
        'BS1': '嫣红杨梅气泡饮',
        'BS2': '粉红葡萄柚气泡饮',
        'BS3': '鲜柠气泡饮',
        'BS4': '桃花苏打',
        'BS5': '热带百香果气泡饮',
        'BS6': '芭乐微风',
        'BS7': '芒果爆爆气泡饮',
        'BS8': '石榴气泡饮'
        
    },
    'en': {
        'copy_address': 'Copy Address',
        'copied': 'Address copied!',
        'copy_failed': 'Copy failed, please copy manually.',
        'menu_category': 'Categories',
        'B1': 'Signature Picks',
        'B2': 'Fruit Tea Series',
        'B3': 'Milk Tea Series',
        'B4': 'Full Menu',
        'B5': 'Signature Desserts',
        'B6': 'Sparkling Series',
        // 招牌推荐
        'ZP1': 'Strawberry Thai Green Milk',
        'ZP2': 'Thai Milk Tea',
        'ZP3': 'Grape Lemon Tea',
        'ZP4': 'Black Sesame Smoothie',
        'ZP5': '5.5 Ice Cream',
        'ZP6': 'Duang Duang Rabbit',
        // 水果茶系列
        'SG1': 'Lemonade',
        'SG2': 'Passion Fruit Tea',
        // 奶茶系列
        'NC1': 'Strawberry Thai Green Milk',
        'NC2': 'Thai Milk Tea',
        // 总菜单
        'BT_1': 'Fruit Tea Series',
        'ZD1': 'Fresh Lemonade',
        'ZD2': 'Strawberry Lemonade',
        'ZD3': 'Guava Lemon Tea',
        'ZD4': 'Wild Sour Horn Juice',
        'ZD5': 'Strawberry Jasmine Tea',
        'ZD6': 'Thai Green Strawberry',
        'ZD7': 'Thai Lemon Black Tea',
        'ZD8': 'Thai Lemon Green Tea',
        'ZD9': 'Grape Lemon Tea',
        'ZD10': 'Winter Jasmine Tea',
        'ZD11': 'Passion Fruit Tea',
        'ZD12': 'Mango Fruit Tea',

        'BT_2': 'Milk Tea Series',
        'ZD13': 'Classic Milk Tea',
        'ZD14': 'Brown Sugar Boba Milk',
        'ZD15': 'Thai Milk Tea',
        'ZD16': 'Thai Green Milk Tea',
        'ZD17': 'Strawberry Thai Green Tea',
        'ZD18': 'Strawberry Matcha Milk Tea',

        'BT_3': 'Ice Cream Series',
        'ZD19': '5.5 Ice Cream',
        'ZD20': 'Pure Sundae',
        'ZD21': 'Brown Sugar Sundae',
        'ZD22': 'Strawberry Sundae',
        'ZD23': 'Chocolate Sundae',
        'ZD24': 'Mango Sundae',

        'BT_4': 'Smoothie Series',
        'ZD25': 'Black Sesame Smoothie',
        'ZD26': 'Peanut Smoothie',
        'ZD27': 'Strawberry Smoothie',
        'ZD28': 'Passion Fruit Smoothie',

        'BT_5': 'Special Dessert',
        'ZD29': 'Duang Duang Rabbit',
        'ZD30': 'Hawthorn',
        'ZD31': 'Red Bean',
        'ZD32': 'Peach',

        'BT_6': 'Sparkling Series',
        'ZD33': 'Ruby Yangmei Spark',
        'ZD34': 'Pink Grapefruit Fizz',
        'ZD35': 'Fresh Lemon Fizz',
        'ZD36': 'Peach Blossom Soda',
        'ZD37': 'Tropical Passion Spark',
        'ZD38': 'Guava Breeze',
        'ZD39': 'Mango Pop',
        'ZD40': 'Pomegranate Spark',

        // 特色甜点
        'TS1': '5.5 Ice Cream',
        'TS2': 'Duang Duang Rabbit',
        // 冰沙系列
        'BS1': 'Ruby Yangmei Spark',
        'BS2': 'Pink Grapefruit Fizz',
        'BS3': 'Fresh Lemon Fizz',
        'BS4': 'Peach Blossom Soda',
        'BS5': 'Tropical Passion Spark',
        'BS6': 'Guava Breeze',
        'BS7': 'Mango Pop',
        'BS8': 'Pomegranate Spark'
    },
    'ms': {
        'copy_address': 'Salin Alamat',
        'copied': 'Alamat telah disalin!',
        'copy_failed': 'Gagal menyalin, sila salin secara manual.',
        'menu_category': 'Kategori',
        'B1': 'Pilihan Signature',
        'B2': 'Siri Teh Buah',
        'B3': 'Siri Teh Susu',
        'B4': 'Menu Penuh',
        'B5': 'Pencuci Mulut Istimewa',
        'B6': 'Siri Soda',
        // 招牌推荐
        'ZP1': 'Susu Hijau Thai Strawberi',
        'ZP2': 'Teh Susu Thai',
        'ZP3': 'Teh Lemon Anggur',
        'ZP4': 'Smoothie Bijan Hitam',
        'ZP5': 'Aiskrim 5.5',
        'ZP6': 'Arnab Duang Duang',
        // 水果茶系列
        'SG1': 'Air Lemon',
        'SG2': 'Teh Markisa',
        // 奶茶系列
        'NC1': 'Susu Hijau Thai Strawberi',
        'NC2': 'Teh Susu Thai',
        // 总菜单
        'BT_1': 'Siri Teh Buah',
        'ZD1': 'Jus Lemon Segar',
        'ZD2': 'Jus Lemon Strawberi',
        'ZD3': 'Teh Lemon Jambu',
        'ZD4': 'Jus Asam Kelubi',
        'ZD5': 'Teh Jasmin Strawberi',
        'ZD6': 'Teh Hijau Thai Strawberi',
        'ZD7': 'Teh O Lemon Thai',
        'ZD8': 'Teh Hijau Lemon Thai',
        'ZD9': 'Teh Lemon Anggur',
        'ZD10': 'Teh Jasmin Musim Sejuk',
        'ZD11': 'Teh Markisa',
        'ZD12': 'Teh Mangga',

        'BT_2': 'Siri Teh Susu',
        'ZD13': 'Teh Susu Klasik',
        'ZD14': 'Susu Gula Perang Boba',
        'ZD15': 'Teh Susu Thai',
        'ZD16': 'Teh Susu Hijau Thai',
        'ZD17': 'Teh Hijau Thai Strawberi',
        'ZD18': 'Teh Susu Matcha Strawberi',

        'BT_3': 'Siri Aiskrim',
        'ZD19': 'Aiskrim 5.5',
        'ZD20': 'Sundae Asli',
        'ZD21': 'Sundae Gula Perang',
        'ZD22': 'Sundae Strawberi',
        'ZD23': 'Sundae Coklat',
        'ZD24': 'Sundae Mangga',

        'BT_4': 'Siri Smoothie',
        'ZD25': 'Smoothie Bijan Hitam',
        'ZD26': 'Smoothie Kacang',
        'ZD27': 'Smoothie Strawberi',
        'ZD28': 'Smoothie Markisa',

        'BT_5': 'Pencuci Mulut Istimewa',
        'ZD29': 'Arnab Duang Duang',
        'ZD30': 'Hawthorn',
        'ZD31': 'Kacang Merah',
        'ZD32': 'Pic',

        'BT_6': 'Siri Minuman Berkarbonat',
        'ZD33': 'Sparkling Yangmei Delima',
        'ZD34': 'Fizz Limau Gedang Merah Jambu',
        'ZD35': 'Fizz Lemon Segar',
        'ZD36': 'Soda Bunga Pic',
        'ZD37': 'Sparkling Markisa Tropika',
        'ZD38': 'Bayu Jambu Batu',
        'ZD39': 'Pop Mangga',
        'ZD40': 'Sparkling Delima',
        // 特色甜点
        'TS1': 'Aiskrim 5.5',
        'TS2': 'Arnab Duang Duang',
        // 冰沙系列
        'BS1': 'Sparkling Yangmei Delima',
        'BS2': 'Fizz Limau Gedang Merah Jambu',
        'BS3': 'Fizz Lemon Segar',
        'BS4': 'Soda Bunga Pic',
        'BS5': 'Sparkling Markisa Tropika',
        'BS6': 'Bayu Jambu Batu',
        'BS7': 'Pop Mangga',
        'BS8': 'Sparkling Delima'
    }
};

/**
 * Current active language / 当前语言 / Bahasa semasa
 */
let currentLang = 'zh';

/**
 * Change the website language / 切换网页语言 / Tukar bahasa laman web
 * @param {string} lang - The target language code ('zh', 'en', 'ms')
 */
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // 查找所有带有 data-i18n 属性的元素并更新其文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
}

/**
 * Copy address to clipboard / 复制地址到剪贴板 / Salin alamat ke papan keratan
 */
function copyAddress() {
    const addressText = document.getElementById('shop-address').innerText;
    const copyBtn = document.getElementById('copyBtn');
    const btnIcon = copyBtn.querySelector('i');

    navigator.clipboard.writeText(addressText).then(() => {
        copyBtn.classList.add('success');
        btnIcon.className = "fa-solid fa-check";

        // 弹出简易通知提示
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = 'rgba(0,0,0,0.8)';
        toast.style.color = '#fff';
        toast.style.padding = '8px 16px';
        toast.style.borderRadius = '20px';
        toast.style.fontSize = '0.9rem';
        toast.style.zIndex = '10000';
        toast.innerText = translations[currentLang]['copied'];
        document.body.appendChild(toast);

        setTimeout(() => {
            copyBtn.classList.remove('success');
            btnIcon.className = "fa-regular fa-copy";
            toast.remove();
        }, 2000);
    }).catch(err => {
        alert(translations[currentLang]['copy_failed']);
    });
}

/**
 * =====================================
 * 网页加载完成后的初始化工作
 * =====================================
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 自动将顶部配置的变量，填入到网页对应的按钮链接和文本中
    if(document.getElementById('link-ig')) document.getElementById('link-ig').href = shopConfig.instagram;
    if(document.getElementById('link-whatsapp')) document.getElementById('link-whatsapp').href = shopConfig.whatsapp;
    // if(document.getElementById('link-facebook')) document.getElementById('link-facebook').href = shopConfig.facebook; // 改好后保持注释，安全不崩溃
    if(document.getElementById('link-googlemaps')) document.getElementById('link-googlemaps').href = shopConfig.googleMaps;
    if(document.getElementById('shop-address')) document.getElementById('shop-address').innerText = shopConfig.address;

    // 2. 标签切换逻辑：处理左侧分类点击，切换右侧大图
    const tabs = document.querySelectorAll('#category-tabs li');
    const sections = document.querySelectorAll('.gallery-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有标签的高亮，给当前点击的加高亮
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 隐藏所有图片区块
            sections.forEach(sec => sec.classList.remove('active'));
            
            // 根据点击的目标，显示对应的图片区块
            const targetId = tab.getAttribute('data-target');
            if(document.getElementById(targetId)) {
                document.getElementById(targetId).classList.add('active');
            }
        });
    });

    // 3. 新增：右侧隐藏式悬浮抽屉菜单点击控制逻辑
    const socialBox = document.getElementById('socialBox');
    if (socialBox) {
        const toggleBtn = socialBox.querySelector('.toggle-btn');
        
        // 点击小箭头时，切换显示/隐藏状态
        toggleBtn.addEventListener('click', function(e) {
            socialBox.classList.toggle('show');
            e.stopPropagation(); // 阻止事件冒泡，防止触发下面的全局点击
        });
        
        // 点击页面其余任何区域时，自动把抽屉收起来，打造绝佳交互感
        document.addEventListener('click', function() {
            socialBox.classList.remove('show');
        });
        
        // 阻止侧边栏内部点击导致面板意外收起
        socialBox.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});
