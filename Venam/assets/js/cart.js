let buttons = document.querySelectorAll('#basket-btn');
let products;
const existingId = [];
let count = document.querySelector('#cart-html-count')

let tableBody = document.querySelector('.table-products #table-body');
let totalPriceLabel = document.querySelector('.table-totals #total-price');
let subtotalPriceLabel = document.querySelector('.table-totals #subtotal-price');

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


function ShowEmptyMessage() {
    if (products.length === 0) {
        console.log('yes');
        document.querySelector('.return').classList.remove('d-none');
        document.querySelector('.table-empty').classList.remove('d-none');
        document.querySelector('.product-window').classList.add('d-none');
    }
    else{
        document.querySelector('.return').classList.add('d-none');
        document.querySelector('.table-empty').classList.add('d-none');
        document.querySelector('.product-window').classList.remove('d-none');
    }
}
if (document.querySelector('.return') != null) {
    ShowEmptyMessage();
}

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

function FindProductByTitle(productTitle) {
    let foundProduct = null;
    products.forEach(product => {
        if (productTitle === product.Title) {
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

function DecreaseInput(e) {
    let countInput = e.nextElementSibling;
    if (countInput.value > 1) {
        countInput.value--;
    }
    else {
        countInput.value = 1;
    }
    ChangeCount(countInput);
}

function IncreaseInput(e) {
    let countInput = e.previousElementSibling;
    if (countInput.value >= 1) {
        countInput.value++;
    }
    else {
        countInput.value = 1;
    }
    ChangeCount(countInput);
}


function Show() {
    let rows = '';
    let totalPrice = 0;

    products.forEach(product => {
        rows += `
            <tr>
                <th scope="row">
                    <i id="delete-product" onclick="DeleteProduct(event.target)" class="fa-solid fa-trash-can"></i>
                </th>
                <td>
                    <img src="${product.Image}" alt="Product Image">
                </td>
                <td>
                    <span id="product-title" class="link-like">${product.Title}</span>
                </td>
                <td>$<span>${product.Price.toFixed(2)}</span></td>
                <td>
                    <span id="count-input">
                        <span id="decrease" onclick="DecreaseInput(event.target)">-</span>
                        <input type="number" onchange="ChangeCount(event.target)"
                            class="d-inline-block form-control mx-1" value="${product.Count}" min="1">
                        <span id="decrease" onclick="IncreaseInput(event.target)">+</span>
                    </span>
                </td>
                <td>$<span>${(product.Price * product.Count).toFixed(2)}</span></td>
            </tr>
        `

        totalPrice += Number((product.Price * product.Count).toFixed(2));
    });

    totalPriceLabel.innerHTML = totalPrice;
    subtotalPriceLabel.innerHTML = totalPrice;
    tableBody.innerHTML = rows;
}

function DeleteProduct(e) {
    let row = e.parentElement.parentElement;
    let foundTitle = row.querySelector('#product-title').innerHTML;
    let found = FindProductByTitle(foundTitle);
    let foundIndex = products.indexOf(found);

    products.splice(foundIndex, 1)
    ShowIndex();
    Show();
    ShowEmptyMessage();
}

function ChangeCount(e) {
    console.log('Hello');
    let row = e.parentElement.parentElement.parentElement;
    let productCount = e.value;
    if (productCount < Number(e.min)) {
        productCount = 1;
    }

    products.forEach(product => {
        let productTitle = row.querySelector('#product-title');
        let foundTitle = FindProductByTitle(productTitle.innerText);
        if (foundTitle.Title === product.Title) {
            product.Count = Number(productCount);
            ShowIndex();
        }
    });
    Show();
}

if (totalPriceLabel != null) {
    Show();
}
