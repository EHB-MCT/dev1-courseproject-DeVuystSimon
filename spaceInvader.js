/*
Simon De Vuyst
*/
/** 
//zelf geschreven, met behulp van de oefeningen
@type {CanvasRenderingContext2D} */
let context;

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext('2d');

alert("Start");

context.fillStyle = "black";
context.fillRect(100, 100, 300, 300);// zwart achtergrond/vierkant tekenen


const pinkSquarePositions = [ // individueel de posities per vierkant bepalen
    { x: 125, y: 175 },
    { x: 175, y: 225 },
    { x: 125, y: 275 },
    { x: 175, y: 325 },
    { x: 325, y: 175 },
    { x: 275, y: 225 },
    { x: 325, y: 275 },
    { x: 275, y: 325 }
];
// Gebaseerd op de for-of
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const pos of pinkSquarePositions) {// for-of loop voor het tekenen van de pinksquares
    context.fillStyle = "pink";
    context.fillRect(pos.x, pos.y, 50, 50);// grootte pinksquares
}