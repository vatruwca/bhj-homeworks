const form = document.getElementById('form');
const progress = document.getElementById('progress');
const file = document.getElementById('file');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');    
    const fileName = document.querySelector('.input__wrapper-desc');
    const formData = new FormData(form);   
    formData.append('file', file.files[0]);
    xhr.upload.onloadstart = function (e) {            
        progress.value = 0;            
    };
    xhr.upload.onprogress = function(e){
        progress.value = (e.loaded / e.total);
    };
    xhr.send(formData);
});



    
   