let allCategoriesBtn = document.querySelector('.all-categories-btn');
let allCategoriesMenu = document.querySelector('.all-categories-menu');

allCategoriesBtn.addEventListener('click', function () {
    if (allCategoriesMenu.style.height === '476px') {
        allCategoriesMenu.style.height = '0px';
        allCategoriesMenu.style.overflow = 'hidden';
    }
    else {
        allCategoriesMenu.style.height = '476px';
        allCategoriesMenu.style.overflow = 'visible';
    }
})

let menuToggle = document.querySelectorAll('.menu-toggle');
let megaMenu = document.querySelectorAll('.mega-menu');

for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('mouseenter', function () {
        megaMenu[i].style.height = '476px';
    })

    menuToggle[i].addEventListener('mouseleave', function () {
        megaMenu[i].style.height = '0px'
    })
}

let homeBtn = document.querySelector('.home');
let homeMenu = document.querySelector('.home-menu');

homeBtn.addEventListener('mouseenter', function () {
    homeMenu.style.height = '332px';
})

homeBtn.addEventListener('mouseleave', function () {
    homeMenu.style.height = '0px'
})

let categoriesBtn = document.querySelector('.categories');
let categoriesMenu = document.querySelector('.categories-menu');

categoriesBtn.addEventListener('mouseenter', function () {
    categoriesMenu.style.height = '630px';
    categoriesMenu.style.visibility = 'visible';
    CoordinateCategories();
})

categoriesBtn.addEventListener('mouseleave', function () {
    categoriesMenu.style.height = '0px';
    categoriesMenu.style.visibility = 'hidden';
})

let allCategories = document.querySelector('.all-categories');
let contact = document.querySelector('.contact');

window.addEventListener('resize', function () {
    CoordinateCategories();
    CoordinateShop();
})

CoordinateCategories();
function CoordinateCategories() {
    categoriesMenu.style.left = contact.getBoundingClientRect().x - categoriesBtn.getBoundingClientRect().x - 800 + 'px';
}

let shopBtn = document.querySelector('.shop');
let shopMenu = document.querySelector('.shop-menu');

CoordinateShop();
function CoordinateShop() {
    shopMenu.style.left = contact.getBoundingClientRect().x - shopBtn.getBoundingClientRect().x - 800 + 'px';
}

shopBtn.addEventListener('mouseenter', function () {
    shopMenu.style.height = '250px';
    shopMenu.style.visibility = 'visible';
    CoordinateShop();
})

shopBtn.addEventListener('mouseleave', function () {
    shopMenu.style.height = '0px';
    shopMenu.style.visibility = 'hidden';
})

let pageBtn = document.querySelector('.pages');
let pageMenu = document.querySelector('.page-menu');

pageBtn.addEventListener('mouseenter', function () {
    pageMenu.style.height = '310px';
})

pageBtn.addEventListener('mouseleave', function () {
    pageMenu.style.height = '0px';
})

let storeBtn = document.querySelector('.store');
let storeMenu = document.querySelector('.store-menu');

storeBtn.addEventListener('mouseenter', function () {
    storeMenu.style.height = '160px';
})

storeBtn.addEventListener('mouseleave', function () {
    storeMenu.style.height = '0px';
})

let specialBtn = document.querySelector('.special');
let specialMenu = document.querySelector('.special-menu');

specialBtn.addEventListener('mouseenter', function () {
    specialMenu.style.height = '160px';
})

specialBtn.addEventListener('mouseleave', function () {
    specialMenu.style.height = '0px';
})

let toTop = document.querySelector('#to-top-btn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 320) {
        toTop.classList.remove('d-none');
    }
    else {
        toTop.classList.add('d-none');
    }
});

toTop.addEventListener('click', function (e) {
    $('html, body').animate({ scrollTop: 0 }, '300');
});

let categorySelection = document.querySelector('.category-selection');
let categorySelectionItems = document.querySelectorAll('.category-selection-item');

for (let category of categorySelectionItems) {
    category.addEventListener('click',function () {
        for (const removedCategory of categorySelectionItems) {
            removedCategory.classList.remove('active-category-selection-item');
        }
        category.classList.add('active-category-selection-item');
    })
}