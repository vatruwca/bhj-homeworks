const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderCount = sliderItems.length;
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

function indexActiveSlide() {
    slideIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));     
}

function toggleActiveDot() {
    dots.forEach(item => item.classList.remove('slider__dot_active'));
    dots[slideIndex].classList.add('slider__dot_active');
}

prev.onclick = function () {
    indexActiveSlide();
    sliderItems[slideIndex].classList.remove('slider__item_active');
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = sliderCount - 1;
    }
    sliderItems[slideIndex].classList.add('slider__item_active');
    toggleActiveDot();
}

next.onclick = function () {
    indexActiveSlide();
    sliderItems[slideIndex].classList.remove('slider__item_active');
    slideIndex++;
    if (slideIndex == sliderCount) {
        slideIndex = 0;
    }
    sliderItems[slideIndex].classList.add('slider__item_active');
    toggleActiveDot();
}

dots.forEach((item, idx) => {
    item.onclick = function() {
        sliderItems.forEach(item => item.classList.remove('slider__item_active'));
        sliderItems[idx].classList.add('slider__item_active');    
        indexActiveSlide();
        toggleActiveDot();
    }
})
