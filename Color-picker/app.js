const color = ['red', 'green', '#32a89d', '#5532a8', 'yellow'];
var clr = document.querySelector('#spann');
var colorLen = color.length;
var btn = document.querySelector('#btnn');

function randomColor(arr) {
    const randomCol = Math.floor(Math.random() * colorLen);
    let ranCol = arr[randomCol];
    return ranCol;
}
function pickCol() {
    const chngCol = document.body.style.backgroundColor = randomColor(color);
    clr.innerHTML = chngCol;
    return chngCol;
}
btn.addEventListener('click', pickCol);
//console.log(randomColor(color))