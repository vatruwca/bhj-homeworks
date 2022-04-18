
let timer = document.getElementById("timer");
const endTime = new Date(Date.now() + 5400999);
function countdownTimer() {
  const t = endTime - new Date();
    if (t >= 0) {
       let hours = Math.floor(t / (1000 * 60 * 60));
       let minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
       let seconds = Math.floor(t % (1000 * 60) / 1000);
       hours = hours < 10 ? `0` + hours : hours;
       minutes = minutes < 10 ? `0` + minutes : minutes;
       seconds = seconds < 10 ? `0` + seconds : seconds;
       timer.textContent = hours + ':' + minutes + ':' + seconds;
    } else {
        clearInterval(clockInterval);
        location = 'https://docs.google.com/presentation/d/12OQKEFSTBA1Z3IXtuJTbHSUCyw87cdj1UuIkedm1ux4/edit?usp=sharing';  
        alert("«Вы победили в конкурсе!»");
      }
};

countdownTimer();
const clockInterval = setInterval(countdownTimer, 1000);