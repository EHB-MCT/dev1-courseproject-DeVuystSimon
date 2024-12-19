// De_Vuyst_Simon
// Volledige code doorgenomen en deels herschreven zie commentaar.
// Gebaseerd op de Get context()Method
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// De Canvas Breedte en hoogte aangemaakt (zelf geschreven)
function setCanvasSize() {
    canvas.width = window.innerWidth;// Met behulp van "The Canvas "context" object"(Zie cursus Module functions)
    canvas.height = window.innerHeight;
}
setCanvasSize();

// Achtergrond instellen met een lineair verloop (zelf geschreven). 
function setBackground() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height); // ctx. Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    gradient.addColorStop(0, '#1e3c72');
    gradient.addColorStop(1, '#2a69ac');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ctx. afkorting voor context. Zie Bron.
// Diamant zelf geschreven met behulp van de oefeningen en de cursus: Lines and shapes en de module functions
function drawDiamond(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y - size * 1.2);
    ctx.lineTo(x + size * 0.6, y);
    ctx.lineTo(x, y + size * 1.2);
    ctx.lineTo(x - size * 0.6, y);
    ctx.closePath();
    ctx.fillStyle = '#A7D3E0';// Licht blauwe kleur
    ctx.fill();
}

// Zelf geschreven
// Beetje hulp uit oefening 1-3-rectangles.js "draw the squares"
function drawGoldBar(x, y, width, height) {
    ctx.fillStyle = '#FFD700'; // Goudkleur
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
}

// DrawRandomShape function herschreven voor leesbaarheid + Laatstste keer was met behulp van chat gpt en toen had ik niet gerefereerd.
// Zelf geschreven maar wel gekeken naar de oefeningen van nr 5-selection-input-events als houvast
function drawRandomShape() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 30 + 20; // Random grootte voorzien

    if (Math.random() < 0.5) { // 50 procent kans op een Diamand
        drawDiamond(x, y, size);
    } else {                    // Anders berekenen we de Goudstaaf
        let width = size * (Math.random() < 0.5 ? 4 : 6); // De Breedte is random, of 4 of 6 keer de grootte
        let height = size * 0.5; // De hoogte is altijd de helft van de random gekozen grootte van de goudstaaf
        drawGoldBar(x, y, width, height);
    }
}

// Fucntion draw multiple shapes (zelf geschreven)
function drawShapes(numShapes) {
    for (let i = 0; i < numShapes; i++) { //for loop
        // volgende 3 lijnen zijn nvt
               // const x = Math.random() * canvas.width;
              // const y = Math.random() * canvas.height;
             // const size = Math.random() * 30 + 20;
        drawRandomShape();
    }
}
// Eventlistener er van tussen gehaald.
// gebaseerd op de getBackground();
// Bron: https://developer.mozilla.org/en-US/docs/Web/CSS/background
setBackground();  // Gradient op de achtergrond zetten
//zelf geschreven
drawShapes(130); // aantal shapes
