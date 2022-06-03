const chatWidget = document.querySelector('.chat-widget');
const inputChat = chatWidget.querySelector('.chat-widget__input');
const messages = chatWidget.querySelector('.chat-widget__messages');

const botAnswers = [
    "Кажется дождь начинается",
    "Оставь меня, старушка, я в печали.",
    "Cделайте мне кофе, пожалуйста. Я люблю крепкий.",
    "Что вы имеете против? Я всего лишь машина",
    "Я не знаю, что вам от меня надо, но я точно знаю, что вы безобразник.",
];




chatWidget.addEventListener('click', function() {
	this.classList.add('chat-widget_active');
})

function getCurrentFormattedTime() {
        const currentTime = new Date();
        const hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
        const minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;
        return (`${hours}:${minutes}`);
    }

function getRandomInt(min, max) {    
    return Math.floor(Math.random() * (max - min)) + min;
}    
    
inputChat.addEventListener('change', function() {
    let message = this.value.trim(); 
    let randomNumAnswer = getRandomInt(0,botAnswers.length);
    let robotMessage = botAnswers[randomNumAnswer];
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${getCurrentFormattedTime()}</div>
        <div class="message__text">
        ${message}
        </div>
    </div>   
    <div class="message">
        <div class="message__time">${getCurrentFormattedTime()}</div>
        <div class="message__text">
        ${robotMessage}
        </div>
    </div>
    `;    
    this.value = null;    
})