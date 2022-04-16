const holes = document.getElementsByClassName('hole');
let deadMole = 0;
let lostMole = 0;
for (let i = 0; i < holes.length; i++) {
    let hole = holes[i];
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {    
            deadMole ++;
            document.getElementById('dead').textContent = deadMole;
            if (deadMole === 10) {
                alert('Вы победили!');                
                return location.reload();
                }                
        } else {
            lostMole ++;
            document.getElementById('lost').textContent = lostMole;
            if (lostMole === 5) {
                alert('Вы проиграли!');                
                return location.reload();
            }
        }
    }
};