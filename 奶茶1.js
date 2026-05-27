// ==========================================
// 🏪 店铺基础信息配置 (Store Configuration)
// ==========================================
// 每次换地址或联系方式，只需要修改这里的双引号里面的内容即可！
const shopConfig = {
    instagram: "https://instagram.com/5point5cafeshop",
    whatsapp: "https://wa.me/60126195988",
    // facebook: "https://facebook.com/your_page",
    googleMaps: "https://maps.app.goo.gl/j25kr4YknTd6H2HN7",
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
        'copied': '已复制!',
        'copy_failed': '复制失败，请手动复制地址。',
        'menu_category': '饮品分类',
        'B1': '招牌推荐',
        'B2': '水果茶系列',
        'B3': '奶茶系列',
        'B4': '总菜单',
        'B5': '特色甜点',
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
        'ZD22': '草莓冰淇淋',
        'ZD23': '巧克力冰淇淋',
        'ZD24': '芒果冰淇淋',

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
        // 特色甜点
        'TS1': '5.5 冰淇淋',
        'TS2': 'Duang Duang 兔兔'
        
    },
    'en': {
        'copy_address': 'Copy Address',
        'copied': 'Copied!',
        'copy_failed': 'Copy failed, please copy manually.',
        'menu_category': 'Categories',
        'B1': 'Signature Picks',
        'B2': 'Fruit Tea Series',
        'B3': 'Milk Tea Series',
        'B4': 'Full Menu',
        'B5': 'Signature Desserts',
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
        'ZD22': 'Strawberry Ice Cream',
        'ZD23': 'Chocolate Ice Cream',
        'ZD24': 'Mango Ice Cream',

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
        // 特色甜点
        'TS1': '5.5 Ice Cream',
        'TS2': 'Duang Duang Rabbit'
    },
    'ms': {
        'copy_address': 'Salin Alamat',
        'copied': 'Disalin!',
        'copy_failed': 'Gagal menyalin, sila salin secara manual.',
        'menu_category': 'Kategori',
        'B1': 'Pilihan Signature',
        'B2': 'Siri Teh Buah',
        'B3': 'Siri Teh Susu',
        'B4': 'Menu Penuh',
        'B5': 'Pencuci Mulut Istimewa',
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
        'ZD22': 'Aiskrim Strawberi',
        'ZD23': 'Aiskrim Coklat',
        'ZD24': 'Aiskrim Mangga',

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
        // 特色甜点
        'TS1': 'Aiskrim 5.5',
        'TS2': 'Arnab Duang Duang'
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
    const btnText = copyBtn.querySelector('span');
    const btnIcon = copyBtn.querySelector('i');

    navigator.clipboard.writeText(addressText).then(() => {
        copyBtn.classList.add('success');
        // 使用翻译后的 "已复制!"
        btnText.innerText = translations[currentLang]['copied'];
        btnIcon.className = "fa-solid fa-check";

        setTimeout(() => {
            copyBtn.classList.remove('success');
            // 恢复为翻译后的 "复制地址"
            btnText.innerText = translations[currentLang]['copy_address'];
            btnIcon.className = "fa-regular fa-copy";
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
    document.getElementById('link-ig').href = shopConfig.instagram;
    document.getElementById('link-whatsapp').href = shopConfig.whatsapp;
    // document.getElementById('link-facebook').href = shopConfig.facebook;
    document.getElementById('link-googlemaps').href = shopConfig.googleMaps;
    document.getElementById('shop-address').innerText = shopConfig.address;

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
            document.getElementById(targetId).classList.add('active');
        });
    });
});
