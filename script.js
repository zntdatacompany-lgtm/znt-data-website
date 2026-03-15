// ============================
// ZNT DATA MAIN SCRIPT
// ============================


// INTRO SCREEN CONTROL
window.addEventListener("load", function(){

const intro = document.getElementById("intro");

if(intro){
setTimeout(function(){
intro.style.display="none";
},2500);
}

});



// SMOOTH SCROLL FUNCTION

function scrollServices(){

var section = document.getElementById("services");

if(section){
section.scrollIntoView({
behavior:"smooth"
});
}

}



// NAVBAR ACTIVE LINK

const links = document.querySelectorAll("nav a");

links.forEach(function(link){

link.addEventListener("click",function(){

links.forEach(function(nav){
nav.classList.remove("active");
});

this.classList.add("active");

});

});



// CONTACT FORM VALIDATION

function sendMessage(){

var name=document.getElementById("contactName");
var email=document.getElementById("contactEmail");

if(!name || !email){
alert("Form fields missing");
return;
}

if(name.value=="" || email.value==""){
alert("Please fill all fields");
return;
}

alert("Message Sent Successfully");

name.value="";
email.value="";

}



// SCROLL ANIMATION OBSERVER

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){
entry.target.classList.add("fade-in");
}

});

});


document.querySelectorAll(".service-box, .card, .project-card")
.forEach(function(el){

observer.observe(el);

});



// LOADER CONTROL

function showLoader(){

var loader=document.getElementById("loader");

if(loader){
loader.style.display="block";
}

}


function hideLoader(){

var loader=document.getElementById("loader");

if(loader){
loader.style.display="none";
}

}
