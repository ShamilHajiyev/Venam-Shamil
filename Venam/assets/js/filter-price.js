let lowerSlider = document.querySelector('.shop-filter .price #lower');
let  upperSlider = document.querySelector('.shop-filter .price #upper');

document.querySelector('.shop-filter .price #two').value=upperSlider.value;
document.querySelector('.shop-filter .price #one').value=lowerSlider.value;

let lowerVal = parseInt(lowerSlider.value);
let upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('.shop-filter .price #two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('.shop-filter .price #one').value=this.value
};