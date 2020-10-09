<?php

$lname = $_POST['lname'];
$fname = $_POST['fname'];
$studNum = $_POST['studno'];
$yearLevel = $_POST['yrlvl'];
$mobile = $_POST['mobno'];
$birthday = $_POST['birthday'];
$emailAdd = $_POST['email'];
$username = $_POST['usern'];
$password = $_POST['psw'];
$repeatPassword = $_POST['confirmpass'];

if ($password == $repeatPassword) {
	insertRecord($lname,$fname,$studNum,$yearLevel,
	$mobile,$birthday,$emailAdd,$username,$password);
}
	else{
		echo '<script>
				alert("Your password do not match");
					</script>';
		echo '<script>
				window.history.go(-1);
					</script>';			
		}

function insertRecord($lname,$fname,$studno,$yrlvl,
	$mobno,$birthday,$email,$usern,$psw){
	try{
	require 'database.php';

		$sql = "INSERT INTO users (Last Name, First Name, Student No.,
		Year Level, Mobile No., Birthday, Email, Username, Password)
		VALUES (?,?,?,?,?,?,?,?,?)";

		$conn->prepare($sql)->execute
		([$lname,$fname,$studno,$yrlvl,$mobno,$birthday,$email,$usern,$psw]);
	
	echo '<script>
		alert("You have registered successfully");
		</script>';
	}
	catch(PDOException $e){
	echo $sql . "<br>" . $e->getMessage();	
	}
$conn = null;
}

?>