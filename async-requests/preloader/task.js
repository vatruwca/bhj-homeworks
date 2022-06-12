const loader = document.querySelector('.loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    const valute = JSON.parse(xhr.responseText).response.Valute;
      for (let i in valute) {
        items.insertAdjacentHTML('afterBegin',
          `<div class="item">
              <div class="item__code">
                ${valute[i]['CharCode']}
              </div>
              <div class="item__value">
                ${valute[i]['Value']}
              </div>   
              <div class="item__currency">
                руб.
              </div>                
           </div>`);                
      }
  }  
});       