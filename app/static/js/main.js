let myImage = document.getElementById("myImage");
let loader = document.getElementById("loader");
let body = document.getElementById("body");
let toTopButton = document.getElementById("scrollToTop");
let opacity = "0";
let display = "none";

// Scroll To Top Logic
toTopButton.style.opacity = opacity;
toTopButton.style.display = display;
window.addEventListener("scroll", function() {
    // Scrolled Value
    let top1 = (window.pageYOffset || body.scrollTop)  - (body.clientTop || 0);
    // Hide Logic
    if ( top1 > 900 ) {
        display = "block";
        toTopButton.style.display = display;
    } else if ( top1 < 900 ) {
        display = "none";
        toTopButton.style.display = display;
    } 
    // Transition Effect Logic
    if ( top1 > 1000 ) {
        opacity = "1";
        toTopButton.style.opacity = opacity;
    } else if ( top1 < 1000 ) {
        opacity = "0";
        toTopButton.style.opacity = opacity;
    }
});
// OnClick Scroll Logic
toTopButton.addEventListener("click", () => {
    document.getElementById("body").scrollIntoView({
        behavior: 'smooth'
    });
});

//image loading effect logic
myImage.addEventListener("load", function() {
    loader.style.zIndex = "1";
    loader.style.display = "none";
});

window.addEventListener("load", function() {
    loader.style.zIndex = "1";
    loader.style.display = "none";
});