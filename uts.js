const sliderImages = document.getElementById("sliderImages");
const images = document.querySelectorAll(".slider-images img");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
sliderImages.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

