function login(){
	
	usernameInput = document.getElementById("username").value;
	passwordInput = document.getElementById("pass").value;

	if (usernameInput == "johndoe" && passwordInput == "password"){
		window.location.href = 'dashboard.html';
	} else {
		alert("Username and Password do not match.");
	}

};

function logout(){

	window.location.href = 'index.html';

};