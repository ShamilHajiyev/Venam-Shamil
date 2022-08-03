let mainImage = document.querySelector('.main-image img');
let images = document.querySelectorAll('.image-selection-item img');

for (const image of images) {
    image.addEventListener('click', function () {
        mainImage.src = image.src;
    })
}

let tabMenuBtns = document.querySelectorAll('.description .tabbtn');
let tabMenus = document.querySelectorAll('.description .tab-menu');

for (let i = 0; i < tabMenuBtns.length; i++) {
    tabMenuBtns[i].addEventListener('click', function () {
        for (let j = 0; j < tabMenus.length; j++) {
            tabMenus[j].classList.add('d-none');
            tabMenuBtns[j].classList.remove('tab-active');
        }
        tabMenus[i].classList.remove('d-none');
        tabMenuBtns[i].classList.add('tab-active');
    })
}