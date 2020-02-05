let biography = document.getElementById("myBiography");
let container = document.getElementById("textBlock");
let head = document.getElementById("myMeta");
let biography_height;
let up = document.getElementById("buttonUp");
let down = document.getElementById("buttonDown");
let container_height;
let head_height;
let metaInfo = document.getElementById("MetaInfo");
let maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
let scrolledTop = metaInfo.scrollTop;

// Interval between scrolls
let interval1;
let interval2;

// speed of scrolling biography container
let speed = 50;
//Auto scroll when mouse is inside of element
up.addEventListener("mouseenter", () => {
    interval1 = setInterval(() => {
        metaInfo.scrollBy({
            top: -speed,
            behavior: "smooth",
        });
    }, 100);
});

//Auto scroll when mouse is inside of element
down.addEventListener("mouseenter", () => {
    interval2 = setInterval(() => {
        metaInfo.scrollBy({
            top: speed,
            behavior: "smooth",
        });
    }, 100);
});

// Clear interval when mouse leaves element: for up
up.addEventListener("mouseleave", () => {
    clearInterval(interval1);
});

// Clear interval when mouse leaves element: for down
down.addEventListener("mouseleave", () => {
    clearInterval(interval2);
});


metaInfo.addEventListener("scroll", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
        clearInterval(interval2);
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
        clearInterval(interval1);
    }
});

metaInfo.addEventListener("mouseover", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    up.style.opacity = '0.3';
    down.style.opacity = '0.3';
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
    }
});

up.addEventListener("mouseover", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    up.style.opacity = '0.5';
    down.style.opacity = '0.3';
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
    }
});

down.addEventListener("mouseover", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    down.style.opacity = '0.5';
    up.style.opacity = '0.3';
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
    }
});

metaInfo.addEventListener("mouseout", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    up.style.opacity = '0';
    down.style.opacity = '0';
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
    }
});

up.addEventListener("mouseout", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    up.style.opacity = '0';
    down.style.opacity = '0';
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
    }
});

down.addEventListener("mouseout", () => {
    maxScrollTop = metaInfo.scrollHeight - metaInfo.clientHeight;
    down.style.opacity = '0';
    up.style.opacity = '0';
    scrolledTop = metaInfo.scrollTop;
    if ( scrolledTop == 0 ) {
        up.style.opacity = '0';
    } else if ( scrolledTop == maxScrollTop ) {
        down.style.opacity = '0';
    }
});


// detect if element is scrollable onload window
window.addEventListener("load", () => {
    biography_height = biography.clientHeight;
    container_height = container.clientHeight;
    head_height = head.clientHeight + 40;
    if ( biography_height > ( container_height - head_height ) ) {
        up.style.display = "block";
        down.style.display = "block";
    } else if ( biography_height < ( container_height - head_height ) ) {
        up.style.display = "none";
        down.style.display = "none";
    }
});

// detect if element is scrollable onresize window
window.addEventListener("resize", () => {
    biography_height = biography.clientHeight;
    container_height = container.clientHeight;
    head_height = head.clientHeight + 40;
    if ( biography_height > ( container_height - head_height ) ) {
        up.style.display = "block";
        down.style.display = "block";
    } else {
        up.style.display = "none";
        down.style.display = "none";
    }
});