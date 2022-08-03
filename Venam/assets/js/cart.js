let buttons = document.querySelectorAll('#basket-btn');
let products;
const existingId = [];
let count = document.querySelector('#cart-html-count')

function CreateProducts() {
    if (JSON.parse(localStorage.getItem('products')) === null) {
        products = [];
    }
    else {
        products = JSON.parse(localStorage.getItem('products'));
        products.forEach(product => {
            existingId.push(product.Id);
        })
    }
}

CreateProducts();

function ShowIndex() {
    count.innerText = products.length;
    localStorage.setItem('products', JSON.stringify(products));
}

function FindProduct(productId) {
    let foundProduct = null;
    products.forEach(product => {
        if (productId === product.Id) {
            foundProduct = product;
        }
    });
    return foundProduct;
}


buttons.forEach(btn => btn.addEventListener('click', function () {
    let productCard = this.parentElement.parentElement.parentElement.parentElement;
    let productId = Number(productCard.id);
    if (existingId.length === 0 || !existingId.includes(productId)) {
        let product = {
            Id: productId,
            Image: productCard.querySelector('.img-1').src,
            Title: productCard.querySelector('.card-bottom .left #product-title').innerText,
            Price: Number(productCard.querySelector('#product-price').innerText),
            Count: 1
        }
        existingId.push(product.Id);
        products.push(product);
    }
    else {
        FindProduct(productId).Count++;
    }
    ShowIndex();
}))

ShowIndex();

document.querySelector('.return').classList.add('d-none');
document.querySelector('.table-empty').classList.add('d-none');
let countInput = document.querySelector('.table-products #count-input input');


function DecreaseInput() {
    if (countInput.value > 1) {
        countInput.value--;
    }
    else{
        countInput.value = 1;
    }
}

function IncreaseInput() {
    if (countInput.value >= 1) {
        countInput.value++;
    }
    else{
        countInput.value = 1;
    }
}

function DeleteProduct() {
    console.log('deleted test');
}

function ChangeCount() {
    
}