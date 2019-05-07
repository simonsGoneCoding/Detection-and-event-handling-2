const div = document.querySelector('div');
let divX = 150; //pozycja diva
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false // flaga (czyli dajemy to if-a, jak jest prawda to sie wykonuje)

let insideDivX; // zmienne okreslajace polozenie kursora w divie. 
let insideDivY; // zainicjalizowane w zasiegu globalnym zeby mozna bylo pobierac w roznych funkcjach

div.addEventListener('mousedown', (e) => { // e = event
    drawActive = !drawActive; // drawActive = true (!false)
    div.style.backgroundColor = '#ccc';
    insideDivX = e.offsetX; //event.offsetX <- podaje pozycje na osi X w srodku diva 
    insideDivY = e.offsetY;
    console.log(insideDivX, insideDivY);
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insideDivX; // clientX podaje pozycje wzgledem okna przegladarki, od lewej minus pozycja w srodku diva (dziala jak calc)
        divY = e.clientY - insideDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    // console.log('puszczamy')
    drawActive = !drawActive;
    div.style.backgroundColor = '#000';
})


// DONE