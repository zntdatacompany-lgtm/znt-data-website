// ===============================
// ZNT DATA HERO SLIDER
// ===============================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const totalSlides = slides.length;


// ===============================
// SHOW SLIDE FUNCTION
// ===============================

function showSlide(index){

    if(index >= totalSlides){
        currentSlide = 0;
    }

    if(index < 0){
        currentSlide = totalSlides - 1;
    }

    slides.forEach((slide,i)=>{
        slide.style.display = "none";

        if(dots[i]){
            dots[i].classList.remove("active");
        }
    });

    slides[currentSlide].style.display = "block";

    if(dots[currentSlide]){
        dots[currentSlide].classList.add("active");
    }

}


// ===============================
// NEXT SLIDE
// ===============================

function nextSlide(){

    currentSlide++;

    showSlide(currentSlide);

}


// ===============================
// PREVIOUS SLIDE
// ===============================

function prevSlide(){

    currentSlide--;

    showSlide(currentSlide);

}


// ===============================
// DOT NAVIGATION
// ===============================

function goToSlide(index){

    currentSlide = index;

    showSlide(currentSlide);

}


// ===============================
// AUTO SLIDER
// ===============================

let sliderInterval = setInterval(()=>{

    currentSlide++;

    showSlide(currentSlide);

},5000);


// ===============================
// PAUSE ON HOVER
// ===============================

const sliderContainer = document.querySelector(".slider");

if(sliderContainer){

    sliderContainer.addEventListener("mouseenter",()=>{

        clearInterval(sliderInterval);

    });

    sliderContainer.addEventListener("mouseleave",()=>{

        sliderInterval = setInterval(()=>{

            currentSlide++;

            showSlide(currentSlide);

        },5000);

    });

}


// ===============================
// INITIAL LOAD
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    if(slides.length > 0){
        showSlide(currentSlide);
    }

});
