const image = document.getElementById('cookie');
let counter = 0;
function sizeChange() {
    if (image.width == 200) {
        image.width += 100;
    } else {
        image.width -= 100;
    }
    counter ++;
    document.getElementById('clicker__counter').textContent = counter;
}
    
image.onclick = sizeChange;