let opacity = 0;
let timeInterval = 0;

function fadeIn() {
    timeInterval = setInterval(show,20);
}

function show() {
    let body = document.querySelector('body');
    opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'));
    if(opacity < 1){
        opacity = opacity + 0.012;
        body.style.opacity = opacity;
    }
    else {
        clearInterval(timeInterval);
    }
}
fadeIn();
