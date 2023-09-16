<?php

    $nom = ["nom"];
    $email = ["email"];
    $occasion = ["occasion"];
    $pack = ["pack"];
    $message = ["message"];

    $destinataire = "focusytbpro@gmail.com"; // Remplacez par votre adresse e-mail
    $sujet = "Nouveau message de contact depuis le site";
    $corpsMessage = "Nom et Prénom : $nom\n";
    $corpsMessage .= "Adresse Email : $email\n";
    $corpsMessage .= "Occasion : $occasion\n";
    $corpsMessage .= "Pack : $pack\n";
    $corpsMessage .= "Message :\n$message";

    mail($destinataire, $sujet, $corpsMessage);
    header("Location: /Pages/confirmation.html");

?>