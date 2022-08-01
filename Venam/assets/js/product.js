let mainImage = document.querySelector('.main-image img');
let images = document.querySelectorAll('.image-selection-item img');

for (const image of images) {
    image.addEventListener('click', function () {
        mainImage.src = image.src;
    })
}