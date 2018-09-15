<?php
$subject = "[Contact form] " . htmlspecialchars($_POST["subject"]);
$msg = htmlspecialchars($_POST["name"]) . "\r\n" . htmlspecialchars($_POST["message"]);
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From:'. htmlspecialchars($_POST["email"]) . "\r\n";

mail("hello@stefantrost.co", $subject, $msg, $headers);

exit;
?>