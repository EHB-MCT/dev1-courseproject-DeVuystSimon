/*
Simon De Vuyst
*/
/** @type {CanvasRenderingContext2D} */
let context;

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext('2d');

alert("Start");

context.fillStyle = "black";
context.fillRect(100, 100, 300, 300);

for (let i = 0; i < pinkSquarePositions.length; i++) {
    const pos = pinkSquarePositions[i];
    context.fillStyle = "pink";
    context.fillRect(pos.x, pos.y, 50, 50);
}