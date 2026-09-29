let currentSlide = 0;

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");


function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else {
        currentSlide = index;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });


    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");
}


function changeSlide(direction) {

    showSlide(currentSlide + direction);


}


function goToSlide(index) {

    showSlide(index);

}


/* Automatic slider */

let autoSlide;

function startAutoSlide() {
    autoSlide = setInterval(function() {
        changeSlide(1);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

const heroSlider = document.querySelector(".hero-slider");

heroSlider.addEventListener("mouseenter", stopAutoSlide);
heroSlider.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();