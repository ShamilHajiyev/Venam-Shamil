let hspan = document.querySelector('.super-deal #hour');
let mspan = document.querySelector('.super-deal #minute');
let sspan = document.querySelector('.super-deal #second');

function Timer(input) {
    let date = input;
    let h = 23 - date.getHours();
    let m = 59 - date.getMinutes();
    let s = 60 - date.getSeconds();

    if (s === 60) {
        s = 0;
        m++;
    }

    hspan.innerHTML = h;
    mspan.innerHTML = m;
    sspan.innerHTML = s;

    if (h < 10) {
        hspan.innerHTML = '0' + h;
    }

    if (m < 10) {
        mspan.innerHTML = '0' + m;
    }

    if (s < 10) {
        sspan.innerHTML = '0' + s;
    }
}


let date = new Date();
Timer(date);
setInterval(() => {
    let date = new Date();
    Timer(date);
}, 1000);