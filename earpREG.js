function validateAll(){
	if (myFunction) {
		document.form.click();
	}
}

function myFunction(){
	var lnameValue = document.getElementById("lname").value;
	var fnameValue = document.getElementById("fname").value;
	var studnoValue = document.getElementById("studno").value;
	var yearLevelValue = document.getElementById("yrlvl").value;
	var mobileValue = document.getElementById("mobno").value;
	var birthdayValue = document.getElementById("birthday").value;
	var emailValue = document.getElementById("email").value;
	var usernameValue = document.getElementById("usern").value;
	var passwordValue = document.getElementById("psw").value;
	var repeatPasswordValue = document.getElementById("repsw").value;
	var termsncoValue = document.getElementById("termsnco").value;

	if (lnameValue == "") {
		setErrorFor(lname, 'Please fill out the last name')
		return false;
	}
	else{
		setSuccessFor(lname);
	}

	if (fnameValue == "") {
		setErrorFor(fname,'Please fill out the first name');
		return false;
	}
	else{
		setSuccessFor(fname);
	}
	
	if (studnoValue == "") {
		setErrorFor(studno, 'Please fill out the student number');
		return false;
	}
	else{
		setSuccessFor(studno);
	}
	
	if (yrlvlValue == "") {
		setErrorFor(yrlvl, 'Please fill out the year level');
		return false;
	}
	else{
		setSuccessFor(yrlvl);
	}
	
	if (mobileValue == "") {
		setErrorFor(mobno, 'Please fill out the mobile number');	
	}
	else{
		setSuccessFor(mobno);
	}

	if (birthdayValue == "") {
		setErrorFor(birthday, "You must be 18 years old or up");
	}
	else{
		setSuccessFor(birthday);
	}
	
	if (emailValue == "") {
		setErrorFor(email, 'Please fill out the email');
		return false;
	}
	else{
		setSuccessFor(email);
	}

	if (usernameValue == "") {
		setErrorFor(usern,'Please fill out the username');
	}
	else{
		setSuccessFor(usern);
	}

	if (passwordValue == "") {
		setErrorFor(psw, 'Please fill out the password');
	}
	else{
		setSuccessFor(psw);
	}

	if (repeatPasswordValue == "") {
		setErrorFor(repsw, 'Please match your password');
	}
	else{
		setSuccessFor(repsw);
	}
	
	if (termsncoValue == "") {
		setErrorFor(termsnco, 'Please check the box');	
	}
	else{
		setSuccessFor(termsnco);
	}

	return true;
}

function setErrorFor(input, message){
	var signup = input.parentElement;
	var small = signup.querySelector('small');
	signup.className = 'signup error';
	small.innerText = message;
}

function setSuccessFor(input){
	var signup = input.parentElement;
	singup.className = 'signup success'
}

function ValidateLastName(lname)
{
	if (/^[A-Za-z]+$/.
	test(myFunction.lastName.value)) {
	return (true)
	}
	alert("Input letters only")
	return (false)
}

function ValidateFirstName(fname)
{
	if (/^[A-Za-z]+$/.
	test(myFunction.firstName.value)) {
	return (true)
	}
	alert("Input letters only")
	return (false)
}

function ValidateMidi(midi)
{
	if (/^[A-Za-z.]+$/.
	test(myFunction.midI.value)) {
	return (true)
	}
	alert("Only two characters are accepted")
	return (false)
}

function ValidateStudno(studno)
{
	if (/^[0-9]{1,11}+$/.
	test(myFunction.studNo.value)) {
	return (true)
	}
	alert("Invalid student number")
	return (false)
}

function ValidateMobile(mobno)
{
	var mobno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(inputtxt.value.match(mobno)) {
	return (true);
	} 
	else {
	alert("Invalid mobile number");
	return (false);
}

function ValidateBirthday(birthday){
if (bdayValue == ""){
        setErrorFor(birthday, 'Birth date cannot be blank');
        return (false);
    } else {
        setSuccessFor(birthday);
        var newBdayValue = bdayValue.replace(/-/, "");   //Converting Birth Date into number
    }
    if (newBdayValue > "20021010"){
        setErrorFor(birthday, 'User must be legal age');
        return (false);
    } else {
        setSuccessFor(birthday);
    }
}

function ValidateEmail(email) 
{	
	if (/^([A-Za-z0-9_\-\.])+\@([ue.edu])+\.(ph)$/.
	test(myFunction.emailAddr.value)) {
    return (true)
	}
    alert("Invalid email address")
    return (false)
}

function ValidateUsername(usern)
{
	if (/^[a-zA-Z][a-zA-Z0-9-_.{8,15}]+$/.
	test(myFunction.userName.value)) {
	return (true)
	}
	alert("Input an appropriate username")
	return (false)
}

function ValidatePassword(psw)
{
	if (/^[a-zA-Z][a-zA-Z0-9-_.{8,20}]+$/.
	test(myFunction.passWord.value)) {
	return(true)
	}
	alert("Input an appropriate password")
	return (false)
}