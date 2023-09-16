
const backbtn = document.getElementById("back-btn")
backbtn.addEventListener("click", () => {
    window.location.href = "/index.html"
})

document.addEventListener("DOMContentLoaded", () => {
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



    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Collectez les données du formulaire
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const occasion = document.getElementById("occasion").value;
        const pack = document.getElementById("choix").value;
        const message = document.getElementById("message").value;

        // Créez un objet contenant les données à envoyer au script PHP
        const formData = new FormData();
        formData.append("nom", nom);
        formData.append("email", email);
        formData.append("occasion", occasion);
        formData.append("pack", pack);
        formData.append("message", message);

        // Effectuez une requête AJAX pour envoyer les données au script PHP
        fetch("contact.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Redirigez l'utilisateur vers la page de confirmation après l'envoi réussi
                    window.location.href = "/Pages/confirmation.html";
                } else {
                    // Gérez les erreurs ici (par exemple, affichez un message d'erreur à l'utilisateur)
                    console.error("Erreur lors de l'envoi du formulaire.");
                }
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi du formulaire.", error);
            });
    });
});