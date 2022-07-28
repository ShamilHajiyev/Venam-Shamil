let selection = document.querySelector('.selection');
let selection_icon = document.querySelector('.selection #selection-icon');
let selection_bar = document.querySelector('.selection .selection-bar');
let selected = document.querySelector('.selection span');
let categories = document.querySelectorAll('.selection .selection-bar .list-item')

for (const category of categories) {
    category.addEventListener('click', function () {
        selected.innerText = category.innerText;
    })
}

selection.addEventListener('click', function () {
    ToggleSelectionBar();
})

function ToggleSelectionBar() {
    if (selection_icon.style.transform === 'rotate(-180deg)') {
        selection_icon.style.transform = 'rotate(0deg)';
        selection_bar.style.height = '0px';
    }
    else {
        selection_icon.style.transform = 'rotate(-180deg)';
        selection_bar.style.height = '410px';
        for (const category of categories) {
            if (category.innerText === selected.innerText) {
                category.classList.add('active');
            }
            else {
                category.classList.remove('active');
            }
        }
    }
}