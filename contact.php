<?php
    $nom = $_POST["nom"];
    $to = $_POST["email"];
    $occasion = $_POST["occasion"];
    $pack = $_POST["pack"];
    $message = $_POST["message"];

    $corpsMessage = "Nom et Prénom : $nom\n";
    $corpsMessage .= "Adresse Email : $to\n";
    $corpsMessage .= "Occasion : $occasion\n";
    $corpsMessage .= "Pack : $pack\n";
    $corpsMessage .= "Message :\n$message";


    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "giuseppe.ferrara@visual-dream.be";
    $subject = "Nouveau message de contact depuis le site";
    $headers = "De : " . $from;
    mail($to,$subject, $corpsMessage, $headers);
    mail($from,$subject, $corpsMessage, $headers);
    header("Location: /Pages/confirmation.html")
?>
