const checkboxes = document.querySelectorAll('.interests > ul > li > label .interest__check');
console.log(checkboxes);
checkboxes.forEach(item => item.addEventListener('change', function() {    
    let checkboxInterests =this.closest('.interest').querySelectorAll('.interests_active input'); 
    this.checked === true ? checkboxInterests.forEach(item => item.checked = true) : checkboxInterests.forEach(item => item.checked = false);
}));