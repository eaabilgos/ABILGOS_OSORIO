<?php

$lastName = isset($_POST['lname']) ? $_POST['lname'] : '';
$firstName = isset($_POST['fname']) ? $_POST['fname'] : '';
$studNum = isset($_POST['studno']) ? $_POST['studno'] : '';
$yearLevel = isset($_POST['yrlvl']) ? $_POST['yrlvl'] : '';
$mobile = isset($_POST['mobno']) ? $_POST['mobno'] : '';
$birthday = isset($_POST['birthday']) ? $_POST['birthday'] : '';
$emailAdd = isset($_POST['email']) ? $_POST['email'] : '';
$username = isset($_POST['usern']) ? $_POST['usern'] : '';
$password = isset($_POST['psw']) ? $_POST['psw'] : '';
$repeatPassword = isset($_POST['repsw']) ? $_POST['repsw'] : '';

if ($password == $repeatPassword) {
	insertRecord($lastName,$firstName,$studNum,$yearLevel,
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
	require 'earpDB.php';

		$sql = "INSERT INTO users (lname, fname, studno,
		yrlvl, mobno, birthday, email, usern, psw)
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