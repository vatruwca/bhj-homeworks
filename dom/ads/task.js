const rotatorArr = Array.from(document.querySelectorAll('.rotator__case'));
let speed = 1000;
let flag = true;

function rotator (arr){
    if (flag) {
        flag = false;
        let activeIdx = arr.findIndex(item => item.classList.contains('rotator__case_active'));
        arr[activeIdx].classList.remove('rotator__case_active');
        if (activeIdx === arr.length - 1) {
           activeIdx = 0;
        } 
        arr[activeIdx + 1].classList.add('rotator__case_active');
        let color = arr[activeIdx + 1].dataset.color;
        arr[activeIdx + 1].style.color = color;
        speed = arr[activeIdx + 1].dataset.speed;
        const delayResponse = setTimeout(() => {
            flag = true;
        }, speed);
    }
}
    
 setInterval ( rotator, 0, rotatorArr);