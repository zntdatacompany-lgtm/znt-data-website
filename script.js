// Smooth scroll button

function scrollServices(){

document.getElementById("services").scrollIntoView({
behavior: "smooth"
});

}


// Login validation

function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "admin@zntdata.com" && password === "1234"){

alert("Login Successful");

window.location.href="index.html";

}else{

alert("Invalid Email or Password");

}

}


// Signup message

function signup(){

alert("Account Created Successfully");

}


// Contact form message

function sendMessage(){

alert("Message Sent Successfully");

}


// Intro animation hide

window.onload = function(){

setTimeout(function(){

let intro = document.getElementById("intro");

if(intro){
intro.style.display="none";
}

},2000);

};
