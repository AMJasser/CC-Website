let y = 0;

let selectedText = document.querySelector("#HomeThing");


//window.addEventListener('scroll', scrolling);

document.addEventListener("wheel", mouseScroll);

function scrolling(event){
    let delta = window.scrollY;
    let maxDelta = 300;
    if (delta < maxDelta) {selectedText.style.opacity = (maxDelta - delta)/maxDelta;}
    else {selectedText.style.opacity = 0;}
    console.log(selectedText.style.opacity); 
}

let delta = 0;

function mouseScroll(event){
    if (!(delta <= 0 & event.deltaY < 0)) delta += event.deltaY;
    let maxDelta = 1000;
    if (delta < maxDelta) {selectedText.style.opacity = (maxDelta - delta)/maxDelta;}
    else {selectedText.style.opacity = 0;}
    console.log(event);
}