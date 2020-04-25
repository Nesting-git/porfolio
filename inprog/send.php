<?php

function send_mail($email) {
	mail("dog27.98@gmail.com", "Заявка с сайта", "Email: $email \nХочу получать рассылку"); 
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: /#sucess"); 
	exit();	
}

if(isset($_POST['mail'])) {
	$email = $_POST['mail'] . "<br>";
	send_mail($email);
} else {
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: /"); 
	exit();
}

?>

