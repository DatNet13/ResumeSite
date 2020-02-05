let skillScroll = document.getElementById("skillScroll");
let left = document.getElementById("skillScrollLeft");
let right = document.getElementById("skillScrollRight");

let maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
let scrolledLeft = skillScroll.scrollLeft;


// M A I N    L O G I C
if (skillScroll.style.overflowX == 'scroll' ) {
    //Speed of slider scrolling when hovring
    let speed = 50;
    
    //interval variables
    let interval1;
    let interval2;

    //Auto scroll when mouse is inside of element
    right.addEventListener("mouseenter", () => {
        interval1 = setInterval(() => {
            skillScroll.scrollBy({
                left: speed,
                behavior: "smooth",
            });
        }, 100);
    });

    //Auto scroll when mouse is inside of element
    left.addEventListener("mouseenter", () => {
        interval2 = setInterval(() => {
            skillScroll.scrollBy({
                left: -speed,
                behavior: "smooth",
            });
        }, 100);
    });

    // Clear interval when mouse leaves element: for right
    right.addEventListener("mouseleave", () => {
        clearInterval(interval1);
    });

    // Clear interval when mouse leaves element: for left
    left.addEventListener("mouseleave", () => {
        clearInterval(interval2);
    });



    skillScroll.addEventListener("scroll", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
            clearInterval(interval2);
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
            clearInterval(interval1);
        }
    });
    
    skillScroll.addEventListener("mouseover", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        left.style.opacity = '0.3';
        right.style.opacity = '0.3';
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
        }
    });
    
    left.addEventListener("mouseover", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        left.style.opacity = '0.5';
        right.style.opacity = '0.3';
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
        }
    });
    
    right.addEventListener("mouseover", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        right.style.opacity = '0.5';
        left.style.opacity = '0.3';
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
        }
    });
    
    skillScroll.addEventListener("mouseout", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        left.style.opacity = '0';
        right.style.opacity = '0';
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
        }
    });
    
    left.addEventListener("mouseout", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        left.style.opacity = '0';
        right.style.opacity = '0';
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
        }
    });
    
    right.addEventListener("mouseout", () => {
        maxScrollLeft = skillScroll.scrollWidth - skillScroll.clientWidth;
        right.style.opacity = '0';
        left.style.opacity = '0';
        scrolledLeft = skillScroll.scrollLeft;
        if ( scrolledLeft == 0 ) {
            left.style.opacity = '0';
        } else if ( scrolledLeft == maxScrollLeft ) {
            right.style.opacity = '0';
        }
    });
}