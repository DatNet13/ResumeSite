let mode;
// Big Devise
let railway = document.getElementById("way");
let float = document.getElementById("float");
let themeSvg = document.getElementById("themeSVG");
// Small Device
let smFloat = document.getElementById("smFloat");
let smRailway = document.getElementById("smWay");
let smThemeSvg = document.getElementById("smThemeSVG");


// Auto Configure Theme If It Is First Visit To Website
if ( localStorage.getItem("mode") === null ) {
    localStorage.setItem("mode", "light");
}

mode = localStorage.getItem("mode");
window.addEventListener("load", () => {
    // Load Current Theme Onload Window For Big Devices
    if( mode === "light" ) {
        float.style.right = "40px";
        float.style.backgroundColor = "white";
        themeSvg.style.fill = "white";
    } else if ( mode === "dark" ) {
        float.style.right = "0px";
        float.style.backgroundColor = "black";
        themeSvg.style.fill = "black";
    }
    // Load Current Theme Onload Window For Small Devices
    if( mode === "light" ) {
        smFloat.style.right = "40px";
        smFloat.style.backgroundColor = "white";
        smThemeSvg.style.fill = "white";
    } else if ( mode === "dark" ) {
        smFloat.style.right = "0px";
        smFloat.style.backgroundColor = "black";
        smThemeSvg.style.fill = "black";
    }

    // Switching Logic

    // Big Devices
    float.addEventListener("click", () => {
        localStorage.setItem("mode", (localStorage.getItem("mode") || "dark") === "dark" ? "light" : "dark");
        mode = localStorage.getItem("mode");
        if( mode === "light" ) {
            float.style.right = "40px";
            float.style.backgroundColor = "white";
            themeSvg.style.fill = "white";
        } else if ( mode === "dark" ) {
            float.style.right = "0px";
            float.style.backgroundColor = "black";
            themeSvg.style.fill = "black";
        }
    });
    
    // Small Devices
    smFloat.addEventListener("click", () => {
        localStorage.setItem("mode", (localStorage.getItem("mode") || "dark") === "dark" ? "light" : "dark");
        mode = localStorage.getItem("mode");
        if( mode === "light" ) {
            smFloat.style.right = "40px";
            smFloat.style.backgroundColor = "white";
            smThemeSvg.style.fill = "white";
        } else if ( mode === "dark" ) {
            smFloat.style.right = "0px";
            smFloat.style.backgroundColor = "black";
            smThemeSvg.style.fill = "black";
        }
    });
});

// Onresize Check Current Theme
window.addEventListener("resize", () => {
    mode = localStorage.getItem("mode");
    if( mode === "light" ) {
        float.style.right = "40px";
        float.style.backgroundColor = "white";
        themeSvg.style.fill = "white";

        smFloat.style.right = "40px";
        smFloat.style.backgroundColor = "white";
        smThemeSvg.style.fill = "white";
    } else if ( mode === "dark" ) {
        float.style.right = "0px";
        float.style.backgroundColor = "black";
        themeSvg.style.fill = "black";

        smFloat.style.right = "0px";
        smFloat.style.backgroundColor = "black";
        smThemeSvg.style.fill = "black";
    }
});


