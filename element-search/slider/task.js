const sliderItems = document.querySelectorAll('.slider__item');
const sliderCount = sliderItems.length;
const dots = document.querySelectorAll('.slider__dot');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let slideIndex = 0;

function toggleActiveSlide(slideIndex) {
    let activeSlide = document.querySelector('.slider__item_active');
    let activeDot = document.querySelector('.slider__dot_active');
    activeSlide.classList.remove('slider__item_active');
    activeDot.classList.remove('slider__dot_active');
    sliderItems[slideIndex].classList.add('slider__item_active');
    dots[slideIndex].classList.add('slider__dot_active');   
}

prev.onclick = function() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = sliderCount - 1;
    }
    toggleActiveSlide(slideIndex);
    return slideIndex;
}


next.onclick = function() {
    slideIndex++;
    if (slideIndex === sliderCount) {
        slideIndex = 0;
    }
    toggleActiveSlide(slideIndex);
    return slideIndex;
}


for (let i = 0; i < sliderCount; i++) {
    dots[i].onclick = function() {
        toggleActiveSlide(i);
    }
}