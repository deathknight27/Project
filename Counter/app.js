const para = document.querySelector('#count');
const color = ['#65271A' , '#5E7933', '#32a89d', '#5532a8', '#71602B' , 'black'];
var colorLen = color.length;
function randomColor(arr) {
    const randomCol = Math.floor(Math.random() * colorLen);
    let ranCol = arr[randomCol];
    return ranCol;
}
function inc(){
 para.innerHTML = +para.innerHTML + 1;
 para.style.color = randomColor(color);

}
function dec(){
    para.innerHTML = +para.innerHTML - 1;
    if(para.innerHTML < 0){
        para.innerHTML = 0;
    }
    para.style.color = randomColor(color);
}
function res(){
    para.innerHTML = 0;
    
}
