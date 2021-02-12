<?php
$nombre=$_POST["nombre"];
$correo=$_POST["correo"];
$telefono=$_POST["telefono"];
$mensaje=$_POST["mensaje"];

$body="Nombre: ".$nombre."<br>correo: ".$correo.
"<br>Telefono: ".$telefono."<br>Mensaje: ".$mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'angelpagolapajuelo99@gmail.com';                     // SMTP username
    $mail->Password   = 'angelpagola';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($correo, $nombre);
    $mail->addAddress('angelpagolapajuelo99@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Envío';
    $mail->CharSet= 'UTF-8';
    $mail->Body    = $body;
    
    $mail->send();
    echo '<script> alert("El mensaje se envió correctamente"); window.history.go(-1); </script>';
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
}
