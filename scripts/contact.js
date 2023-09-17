
const backbtn = document.getElementById("back-btn")
backbtn.addEventListener("click", () => {
    window.location.href = "/index.html"
})

document.addEventListener("DOMContentLoaded", () => {

    // DARK THEME
    const toggleThemeButton = document.getElementById("toggleTheme");
    const backlogo = document.getElementById("back-btn");

    const lightlogos = {
        theme: "/assets/theme_light.png",
        back:  "/assets/arrow-back.png"
    }

    const darklogos = {
        themeIcon: "/assets/theme_dark.png",
        backLogo: "/assets/arrow-back-light.png"
    }

    function setTheme(isDark) {
        toggleThemeButton.src = isDark ? darklogos.themeIcon : lightlogos.theme;
        backlogo.src = isDark ? darklogos.backLogo : lightlogos.back;
    };

    toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark)
        setTheme(isDark);
    });


    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);
        setTheme(isDark);
    };

    loadTheme();

});