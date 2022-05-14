const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
	for (let item of reveals) {
	  const {top, bottom} = item.getBoundingClientRect();	
	
	if ((bottom >= 0) && (window.innerHeight >= top)) {
		item.classList.add('reveal_active');
	} else {
	item.classList.remove('reveal_active');
      }
    }
})