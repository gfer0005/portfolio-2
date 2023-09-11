// CLick events for buttons

const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn")
const skills = document.getElementById("skills")
const skillsBtn = document.getElementById("skills-btn")

skills.style.display = "none";
portfolio.style.display = "flex";


portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
})

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex";
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
})

// Light and dark Mode 

document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelectorAll('img[alt="theme icon"]');
    const githublogo = document.querySelectorAll('img[alt="github logo"]');
    const instalogo = document.querySelectorAll('img[alt="instagram logo"]');

    const lightlogos = {
        github: "assets/github_light.png",
        insta: "assets/instagram-light.png",
        theme: "assets/theme_light.png"
    }

    const darklogos = {
        githublogo: "assets/github_dark.png",
        instalogo: "assets/instagram-dark.png",
        themeIcon: "assets/theme_dark.png"
    }

    function setTheme(isDark) {
        githublogo.src = isDark ? darklogos.githublogo : lightlogos.github;
        instalogo.src = isDark ? darklogos.instalogo : lightlogos.insta;
        themeIcon.src = isDark ? darklogos.themeIcon : lightlogos.theme;
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