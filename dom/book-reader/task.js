const controlFontSize = document.querySelectorAll('.book__control_font-size > a');
const book = document.querySelector('.book');
let size;

function fontSizeClicks(event) {
  event.preventDefault();  
  let fontSize = event.currentTarget;  
	controlFontSize.forEach(item => item.classList.remove('font-size_active'));
  fontSize.classList.add('font-size_active');
  size = fontSize.dataset.size;    
    if (size === 'small') {
      book.classList.add('book_fs-small');  
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big'); 
    }    
};

controlFontSize.forEach(item => {
  item.addEventListener('click', fontSizeClicks);
});


const controlColors = document.querySelectorAll('.book__control_color > a');
let textColor;

function textColorClicks(event) {
  event.preventDefault();
  let color = event.currentTarget;
  controlColors.forEach(item => item.classList.remove('color_active'));
  color.classList.add('color_active');
  textColor = color.dataset.textColor;
  book.style.color = textColor;
}

controlColors.forEach(item => {
  item.addEventListener('click', textColorClicks);
});


const controlBgColors = document.querySelectorAll('.book__control_background > a');
let bgColor;

function bgColorClicks(event) {
  event.preventDefault();
  let color = event.currentTarget;
  controlBgColors.forEach(item => item.classList.remove('color_active'));
  color.classList.add('color_active');
  bgColor = color.dataset.bgColor;
  book.style.background = bgColor;
}

controlBgColors.forEach(item => {
  item.addEventListener('click', bgColorClicks);
});