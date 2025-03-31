<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = 'smtp.gmail.com'; 
        $mail->Username = 'username@email.com'; 
        $mail->Password = 'fakePassword'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; 

        $mail->setFrom('email', 'Abogada Ramos'); 
        $mail->addAddress('toEmail'); 

        $mail->Subject = "Mail de la página web Abogada Ramos";
        $mail->Body = "Este mensaje fue enviado por $name.\n\n".
                      "Su email es: $email.\n\n".
                      "El mensaje es:\n$message\n\n".
                      "Fecha: " . date('d/m/Y H:i', time());


        if ($mail->send()) {
            header('Location: thanks.html'); 
            exit();
        } else {
            echo "Error al enviar el correo: " . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "Error: " . $mail->ErrorInfo;
    }
}