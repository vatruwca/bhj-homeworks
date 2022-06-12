const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let obj = JSON.parse(xhr.response).data;
    pollTitle.insertAdjacentText('afterBegin', `${obj.title}`);
    obj.answers.forEach(item => {
      pollAnswers.insertAdjacentHTML('afterBegin', 
        `<button class="poll__answer">
          ${item}
        </button>`
      );
    })
    const btns = pollAnswers.querySelectorAll('button');
    btns.forEach(item => item.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!')));            
  };
});