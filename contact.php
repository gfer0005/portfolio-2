<?php

$nom = $_POST["nom"];
$email = $_POST["email"];
$occasion = $_POST["occasion"];
$pack = $_POST["pack"];
$message = $_POST["message"];

$destinataire = "focusytbpro@gmail.com"; 
$sujet = "Nouveau message de contact depuis le site";
$corpsMessage = "Nom et Prénom : $nom\n";
$corpsMessage .= "Adresse Email : $email\n";
$corpsMessage .= "Occasion : $occasion\n";
$corpsMessage .= "Pack : $pack\n";
$corpsMessage .= "Message :\n$message";

//mail($destinataire, $sujet, $corpsMessage);

    // Redirigez l'utilisateur vers une page de confirmation ou autre
//header("Location: Pages/confirmation.html");


if (mail($destinataire, $sujet, $corpsMessage);){
    echo "L'email à été envoyé";
    header("Location: Pages/confirmation.html");
} else{
    echo "ERREUR";
}
?>