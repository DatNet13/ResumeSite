let projectRouteBlock = document.getElementsByClassName("project-route-block");
let projectCardContainer  = document.getElementsByClassName("project-card-container");
let cards_length = projectCardContainer.length;
let detailsContainer = document.getElementsByClassName("project-description-block");
let button = document.getElementsByClassName("project-route-button");
let usedTechnologies = document.getElementsByClassName("used-technologies");
let closeButton = document.getElementsByClassName("close-button");


let content;
let compressed;

for ( let i = 0; i < cards_length; i++ ) {
    // Details Button Container Logic
    projectCardContainer[i].addEventListener("mouseover", () => {
        projectRouteBlock[i].style.opacity = "0.9";
    });

    projectCardContainer[i].addEventListener("mouseout", () => {
        projectRouteBlock[i].style.opacity = "0";
    });

    // Details Block Logic
    button[i].addEventListener("click", () => {
        detailsContainer[i].style.zIndex = "10";
    });

    closeButton[i].addEventListener("click", () => {
        detailsContainer[i].style.zIndex = "-1";
    });

    // Replace Symbol In Text
    content = usedTechnologies[i].textContent;
    compressed = content.replace(/\|/g, ", ");
    usedTechnologies[i].textContent = compressed;
}

