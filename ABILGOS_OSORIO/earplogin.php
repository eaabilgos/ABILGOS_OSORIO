<?php
$username = $_POST ['username'];
$password = $_POST ['password'];
$passwordRepeat = $_POST ['psw-repeat'];

if(isset($_POST['submit'])){
    if($username == "abigail" and $password == "phoebe"){
        header("Location:myBio.html");
    }
  else{
        echo '<script>
    alert("Incorrect Username and Password!!");
    </script>';
        
        echo '<script>
            window.history.go(-1);
            </script>';
              }

}
?>