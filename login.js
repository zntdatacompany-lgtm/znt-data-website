// ZNT DATA LOGIN SYSTEM

function loginUser(){

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(email=="" || password==""){
alert("Enter Email and Password");
return;
}

// Demo login

if(email=="admin@zntdata.com" && password=="1234"){

alert("Login Successful");

localStorage.setItem("login","true");

window.location.href="dashboard.html";

}

else{

alert("Invalid Login");

}

}



// CHECK LOGIN

function checkLogin(){

var status = localStorage.getItem("login");

if(status!="true"){

alert("Please Login First");

window.location.href="login.html";

}

}



// LOGOUT

function logout(){

localStorage.removeItem("login");

alert("Logged Out");

window.location.href="login.html";

}
