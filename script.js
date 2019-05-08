const div = document.querySelector('div');
let divX = 150; //div position 
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false // flag

let insideDivX; // variables determing cursor position inside div. 
let insideDivY;

div.addEventListener('mousedown', (e) => {
    drawActive = !drawActive;
    div.style.backgroundColor = '#ccc';
    insideDivX = e.offsetX; //event.offsetX <- gives position on X axis inside div
    insideDivY = e.offsetY;
    console.log(insideDivX, insideDivY);
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insideDivX;
        divY = e.clientY - insideDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    // console.log('drop')
    drawActive = !drawActive;
    div.style.backgroundColor = '#000';
})