<?php
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $occasion = $_POST["occasion"];
    $pack = $_POST["pack"];
    $message = $_POST["message"];

    $destinataire = "focusytbpro@gmail.com"; // Adresse e-mail du destinataire
    $sujet = "Nouveau message de contact depuis le site";
    $corpsMessage = "Nom et Prénom : $nom\n";
    $corpsMessage .= "Adresse Email : $email\n";
    $corpsMessage .= "Occasion : $occasion\n";
    $corpsMessage .= "Pack : $pack\n";
    $corpsMessage .= "Message :\n$message";

    // Configuration du serveur SMTP
    $serveurSMTP = "smtp.hostinger.com"; // Remplacez par le serveur SMTP que vous utilisez
    $portSMTP = 465; // Port SMTP (peut varier selon le serveur)
    $nomUtilisateurSMTP = "giuseppe.ferrara@visual-dream.be"; // Votre adresse e-mail SMTP

    // Envoi de l'e-mail en utilisant la fonction mail() avec le serveur SMTP
    if (mail($destinataire, $sujet, $corpsMessage)) {
        header("Location: /Pages/confirmation.html");
    } else {
        echo "Erreur lors de l'envoi de l'e-mail.";
    }
?>
