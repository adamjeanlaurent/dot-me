let opacity = 0;
let timeInterval = 0;

// fade in animation
function fadeIn() {
    timeInterval = setInterval(show,20);
}

// slowly increases the opacity of the body
function show() {
    let body = document.querySelector('body');
    opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'));
    if(opacity < 1){
        // edit the + [value] to change rate at which the body fades in 
        opacity = opacity + 0.012;
        body.style.opacity = opacity;
    }
    else {
        clearInterval(timeInterval);
    }
}
fadeIn();
