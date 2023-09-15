document.addEventListener("DOMContentLoaded", () => {
    const envoyerBtn = document.getElementById("envoyer-btn");
    const contactForm = document.getElementById("contactForm");

    envoyerBtn.addEventListener("click", () => {
        // Récupérez les données du formulaire
        const formData = new FormData(contactForm);

        // Effectuez une requête POST vers le script PHP
        fetch("contact.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Le script PHP a été exécuté avec succès
                console.log("E-mail envoyé avec succès !");
                // Vous pouvez rediriger l'utilisateur vers une page de confirmation ici
            } else {
                // Il y a eu une erreur lors de l'exécution du script PHP
                console.error("Erreur lors de l'envoi de l'e-mail.");
            }
        })
        .catch(error => {
            console.error("Erreur réseau :", error);
        });
    });
});
