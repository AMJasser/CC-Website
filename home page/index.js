let delta = 0;
let lastY = 0;

let selectedText = document.getElementsByTagName('h2');


window.addEventListener('scroll', noScroll);

function scrolling(event){

    delta += (window.scrollY > lastY) ? 1 : -1;

    let maxScroll = 300;

    selectedText.opacity = (maxScroll - window.scrollY)/maxScroll;

    lastY = window.scrollY;

    console.log('potato: ' + window.scrollY);
}

function noScroll() {   window.scrollTo(0, 0); }