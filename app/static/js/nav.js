let about = document.getElementById("about");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let aboutLineTop = document.getElementById("aboutLineTop");
let aboutLineBottom = document.getElementById("aboutLineBottom");
let skillsLineTop = document.getElementById("skillsLineTop");
let skillsLineBottom = document.getElementById("skillsLineBottom");
let projectsLineTop = document.getElementById("projectsLineTop");
let projectsLineBottom = document.getElementById("projectsLineBottom");
let settings = document.getElementById("settings");
let nav = document.getElementsByTagName("nav");
let home = document.getElementById("home");
let settingLines = document.getElementsByClassName("setting-line");
let main = document.getElementsByTagName("main");
let langContainer = document.getElementsByClassName("lang-container");
let geo = document.getElementById("geo");
let en = document.getElementById("en");
let settingsContainer = document.getElementsByClassName("settings-container");
let smallSettings = document.getElementById("smallSettings");
let smallLines = document.getElementsByClassName("small-line");
let smallNav = document.getElementById("smallNav");
let smNavItem = document.getElementsByClassName("sm-nav-item");





// for small devices
let r = -150;
smallSettings.addEventListener("click", function() {
    if ( r == -150 ){
        r = 0;
        smallNav.style.right = r + 'px';

        smallLines[1].style.display = "none";
        smallLines[0].style.transform = "rotate(45deg)";
        smallLines[2].style.transform = "rotate(-45deg)";
        smallLines[2].style.position = "absolute";
        smallLines[0].style.position = "absolute";
        smallSettings.style.justifyContent = "center";

        smallLines[2].style.backgroundColor = "#dc3545!important";
        smallLines[0].style.backgroundColor = "#dc3545!important";
    } else if ( r == 0 ){
        r = -150;
        smallNav.style.right = r + 'px';

        smallSettings.style.justifyContent = "space-evenly";
        smallLines[0].style.transform = "rotate(0deg)";
        smallLines[2].style.transform = "rotate(0deg)";
        smallLines[2].style.position = "relative";
        smallLines[0].style.position = "relative";
        smallLines[1].style.display = "block";

        smallLines[2].style.backgroundColor = "#5f7181!important";
        smallLines[0].style.backgroundColor = "#5f7181!important";
    }
    smallNav.style.right = r + 'px';
});

document.getElementById("main").addEventListener("click", () => {
    if ( r == 0 ) {
        r = -150;
    }
    smallNav.style.right = r + 'px';

    smallSettings.style.justifyContent = "space-evenly";
    smallLines[0].style.transform = "rotate(0deg)";
    smallLines[2].style.transform = "rotate(0deg)";
    smallLines[2].style.position = "relative";
    smallLines[0].style.position = "relative";
    smallLines[1].style.display = "block";

    smallLines[2].style.backgroundColor = "#5f7181!important";
    smallLines[0].style.backgroundColor = "#5f7181!important";
});


smNavItem[0].addEventListener("click", function() {
    if ( r == 0 ) {
        r = -150;
    }
    smallNav.style.right = r + 'px';

    smallSettings.style.justifyContent = "space-evenly";
    smallLines[0].style.transform = "rotate(0deg)";
    smallLines[2].style.transform = "rotate(0deg)";
    smallLines[2].style.position = "relative";
    smallLines[0].style.position = "relative";
    smallLines[1].style.display = "block";

    smallLines[2].style.backgroundColor = "#5f7181!important";
    smallLines[0].style.backgroundColor = "#5f7181!important";
});

smNavItem[1].addEventListener("click", function() {
    if ( r == 0 ) {
        r = -150;
    }
    smallNav.style.right = r + 'px';

    smallSettings.style.justifyContent = "space-evenly";
    smallLines[0].style.transform = "rotate(0deg)";
    smallLines[2].style.transform = "rotate(0deg)";
    smallLines[2].style.position = "relative";
    smallLines[0].style.position = "relative";
    smallLines[1].style.display = "block";

    smallLines[2].style.backgroundColor = "#5f7181!important";
    smallLines[0].style.backgroundColor = "#5f7181!important";
});

smNavItem[2].addEventListener("click", function() {
    if ( r == 0 ) {
        r = -150;
    }
    smallNav.style.right = r + 'px';

    smallSettings.style.justifyContent = "space-evenly";
    smallLines[0].style.transform = "rotate(0deg)";
    smallLines[2].style.transform = "rotate(0deg)";
    smallLines[2].style.position = "relative";
    smallLines[0].style.position = "relative";
    smallLines[1].style.display = "block";

    smallLines[2].style.backgroundColor = "#5f7181!important";
    smallLines[0].style.backgroundColor = "#5f7181!important";
});

smNavItem[3].addEventListener("click", function() {
    if ( r == 0 ) {
        r = -150;
    }
    smallNav.style.right = r + 'px';

    smallSettings.style.justifyContent = "space-evenly";
    smallLines[0].style.transform = "rotate(0deg)";
    smallLines[2].style.transform = "rotate(0deg)";
    smallLines[2].style.position = "relative";
    smallLines[0].style.position = "relative";
    smallLines[1].style.display = "block";

    smallLines[2].style.backgroundColor = "#5f7181!important";
    smallLines[0].style.backgroundColor = "#5f7181!important";
});

about.addEventListener('mouseover', function() {
    aboutLineTop.style.width = '100%';
    aboutLineBottom.style.width = '100%';
});

about.addEventListener('mouseout', function() {
    aboutLineTop.style.width = '0%';
    aboutLineBottom.style.width = '0%';
});

skills.addEventListener('mouseover', function() {
    skillsLineTop.style.width = '100%';
    skillsLineBottom.style.width = '100%';
});

skills.addEventListener('mouseout', function() {
    skillsLineTop.style.width = '0%';
    skillsLineBottom.style.width = '0%';
});

projects.addEventListener('mouseover', function() {
    projectsLineTop.style.width = '100%';
    projectsLineBottom.style.width = '100%';
});

projects.addEventListener('mouseout', function() {
    projectsLineTop.style.width = '0%';
    projectsLineBottom.style.width = '0%';
});






// setting alignment
let z = -160;
settings.addEventListener("click", function() {
    if ( z == -160 ) {
        z = 0;
        langContainer[0].style.right = z + "px";
        
        settingLines[1].style.display = "none";
        settingLines[0].style.transform = "rotate(45deg)";
        settingLines[2].style.transform = "rotate(-45deg)";
        settingLines[2].style.position = "absolute";
        settingLines[0].style.position = "absolute";
        settings.style.justifyContent = "center";
        langContainer[0].style.right = z + "px";

        settingLines[2].style.backgroundColor = "#dc3545!important";
        settingLines[0].style.backgroundColor = "#dc3545!important";
    } else if ( z == 0 ) {
        z = -160;
        langContainer[0].style.right = z + "px";
  
        settings.style.justifyContent = "space-evenly";
        settingLines[0].style.transform = "rotate(0deg)";
        settingLines[2].style.transform = "rotate(0deg)";
        settingLines[2].style.position = "relative";
        settingLines[0].style.position = "relative";
        settingLines[1].style.display = "block";

        settingLines[2].style.backgroundColor = "#5f7181!important";
        settingLines[0].style.backgroundColor = "#5f7181!important";
    }
});

geo.addEventListener("click", () => {
    if ( z == 0 ) {
        z = -160;

        langContainer[0].style.right = z + "px";
  
        settings.style.justifyContent = "space-evenly";
        settingLines[0].style.transform = "rotate(0deg)";
        settingLines[2].style.transform = "rotate(0deg)";
        settingLines[2].style.position = "relative";
        settingLines[0].style.position = "relative";
        settingLines[1].style.display = "block";

        settingLines[2].style.backgroundColor = "#5f7181!important";
        settingLines[0].style.backgroundColor = "#5f7181!important";  
    }
});


document.getElementById("main").addEventListener("click", () => {
    if (z == 0) {
        z = -160;

        settings.style.justifyContent = "space-evenly";
        settingLines[0].style.transform = "rotate(0deg)";
        settingLines[2].style.transform = "rotate(0deg)";
        settingLines[2].style.position = "relative";
        settingLines[0].style.position = "relative";
        settingLines[1].style.display = "block";

        settingLines[2].style.backgroundColor = "#5f7181!important";
        settingLines[0].style.backgroundColor = "#5f7181!important";

        langContainer[0].style.right = z + "px";
    }
    langContainer[0].style.right = z + "px";
});


// Scroll Event For Nav
window.addEventListener("scroll", function(a) {
    let body1 = document.getElementsByTagName("body");
    let nav = document.getElementsByTagName("nav");

    // S C R O L L   T O P
    let top = (window.pageYOffset || body1.scrollTop)  - (body1.clientTop || 0);
    
    let navHeightOnScroll = '40px';
    let navHeightDefault = '80px';
    let navFontSizeOnScroll = '80%';
    let navFontSizeOnScrollHome = '100%';
    let navFontSizeDefault = "25px";

    let lineHeightDefault = '10px';
    let lineHeightOnScroll = '5px';

    let settingLinesHeightDefault = "8px";
    let settingLinesHeightOnScroll = "4px";

    let settingsContainerJustifyDefault = "center";
    let settingsContainerJustifyOnScroll = "flex-start";

    let smallSettingsHeightDefault = "80px";
    let smallSettingsHeightOnScroll = "40px";

    let smallLinesHeightOnScroll = "4px";
    let smallLinesHeightDefault = "8px";
    
    let smallLinesWidthOnScroll = "100%";
    let smallLinesWidthDefault = "100%";

    let smallNavTopDefault = "80px";
    let smallNavTopOnScroll = "40px";

    if (top > 1) {
        smallNav.style.top = smallNavTopOnScroll;
        main[0].style.marginTop = navHeightDefault;

        smallSettings.style.height = smallSettingsHeightOnScroll;
        smallSettings.style.width = "40px";
        smallLines[0].style.height = smallLinesHeightOnScroll;
        smallLines[1].style.height = smallLinesHeightOnScroll;
        smallLines[2].style.height = smallLinesHeightOnScroll;
        smallLines[0].style.width = smallLinesWidthOnScroll;
        smallLines[1].style.width = smallLinesWidthOnScroll;
        smallLines[2].style.width = smallLinesWidthOnScroll;

        this.nav.style.height = navHeightOnScroll;
        home.style.lineHeight = navHeightOnScroll;
        about.style.lineHeight = navHeightOnScroll;
        skills.style.lineHeight = navHeightOnScroll;
        projects.style.lineHeight = navHeightOnScroll;
        this.nav.style.position = "fixed";
        this.nav.style.top = '0px';
        home.style.fontSize = navFontSizeOnScrollHome;
        about.style.fontSize = navFontSizeOnScroll;
        skills.style.fontSize = navFontSizeOnScroll;
        projects.style.fontSize = navFontSizeOnScroll;

        aboutLineTop.style.height = lineHeightOnScroll;
        aboutLineBottom.style.height = lineHeightOnScroll;
        skillsLineTop.style.height = lineHeightOnScroll;
        skillsLineBottom.style.height = lineHeightOnScroll;
        projectsLineTop.style.height = lineHeightOnScroll;
        projectsLineBottom.style.height = lineHeightOnScroll;

        settings.style.width = navHeightOnScroll;
        settings.style.height = navHeightOnScroll;

        settingLines[0].style.height = settingLinesHeightOnScroll;
        settingLines[1].style.height = settingLinesHeightOnScroll;
        settingLines[2].style.height = settingLinesHeightOnScroll;

        langContainer[0].style.top = navHeightOnScroll;

    } else {

        main[0].style.marginTop = "0px";

        smallNav.style.top = smallNavTopDefault;

        smallSettings.style.height = smallSettingsHeightDefault;
        smallSettings.style.width = "80px";
        smallLines[0].style.height = smallLinesHeightDefault;
        smallLines[1].style.height = smallLinesHeightDefault;
        smallLines[2].style.height = smallLinesHeightDefault;
        smallLines[0].style.width = smallLinesWidthDefault;
        smallLines[1].style.width = smallLinesWidthDefault;
        smallLines[2].style.width = smallLinesWidthDefault;


        this.nav.style.height = navHeightDefault;
        this.nav.style.position = "relative";
        home.style.lineHeight = navHeightDefault;
        about.style.lineHeight = navHeightDefault;
        skills.style.lineHeight = navHeightDefault;
        projects.style.lineHeight = navHeightDefault;

        home.style.fontSize = navFontSizeDefault;
        about.style.fontSize = navFontSizeDefault;
        skills.style.fontSize = navFontSizeDefault;
        projects.style.fontSize = navFontSizeDefault;

        aboutLineTop.style.height = lineHeightDefault;
        aboutLineBottom.style.height = lineHeightDefault;
        skillsLineTop.style.height = lineHeightDefault;
        skillsLineBottom.style.height = lineHeightDefault;
        projectsLineTop.style.height = lineHeightDefault;
        projectsLineBottom.style.height = lineHeightDefault;

        settings.style.width = navHeightDefault;
        settings.style.height = navHeightDefault;

        settingLines[0].style.height = settingLinesHeightDefault;
        settingLines[1].style.height = settingLinesHeightDefault;
        settingLines[2].style.height = settingLinesHeightDefault;

        langContainer[0].style.top = navHeightDefault;

    }
});

about.addEventListener("click", () => {
    document.getElementById("AboutContent").scrollIntoView({
        behavior: 'smooth'
    });
});

skills.addEventListener("click", () => {
    document.getElementById("SkillsContent").scrollIntoView({
        behavior: 'smooth'
    });
});

projects.addEventListener("click", () => {
    document.getElementById("ProjectsContent").scrollIntoView({
        behavior: 'smooth'
    });
});


// For Small Devices

// Small Device Nav Items
let about_s = document.getElementById("aboutSmall");
let skills_s = document.getElementById("skillsSmall");
let projects_s = document.getElementById("projectsSmall");

about_s.addEventListener("click", () => {
    document.getElementById("AboutContent").scrollIntoView({
        behavior: 'smooth'
    });
});

skills_s.addEventListener("click", () => {
    document.getElementById("SkillsContent").scrollIntoView({
        behavior: 'smooth'
    });
});

projects_s.addEventListener("click", () => {
    document.getElementById("ProjectsContent").scrollIntoView({
        behavior: 'smooth'
    });
});