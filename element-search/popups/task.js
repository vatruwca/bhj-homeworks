const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const closeBtn = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');	

modalMain.classList.add('modal_active');

closeBtn.forEach(item => {
	item.onclick = function() {
	modalMain.classList.remove('modal_active');      
    modalSuccess.classList.remove('modal_active');
    };
});

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}