// De_Vuyst_Simon
// Volledige code doorgenomen en deels herschreven zie commentaar.
// Gebaseerd op de Get context()Method
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// De Canvas Breedte en hoogte aangemaakt (zelf geschreven)
function setCanvasSize() {
    canvas.width = window.innerWidth; // Met behulp van "The Canvas "context" object"(Zie cursus Module functions)
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
    ctx.fillStyle = '#A7D3E0'; // Licht blauwe kleur
    ctx.fill();
}

// Zelf geschreven
// Beetje hulp uit oefening 1-3-rectangles.js "draw the squares"
function drawGoldBar(x, y, width, height) {
    ctx.fillStyle = '#FFD700'; // Goudkleur
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
}

let shapes = []; // Array voor het opslaan van vormen (nieuw).
let mouseX = 0;
let mouseY = 0;
const interactionRadius = 300; // Interactieradius rond de cursor

// Vormen aanmaken (zelf geschreven).
function createShapes(numShapes) {
    for (let i = 0; i < numShapes; i++) {
        let size = Math.random() * 30 + 20;
        let type = Math.random() < 0.5 ? 'diamond' : 'goldBar';
        let width = size * (Math.random() < 0.5 ? 4 : 6);
        let height = size * 0.5;
        let dx = Math.random() * 4 - 2;
        let dy = Math.random() * 4 - 2;
        let shape = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: size,
            width: width,
            height: height,
            dx: dx,
            dy: dy,
            type: type
        };
        shapes.push(shape);
    }
}

// Vormen updaten (zelf geschreven).
function updateShapes() {
    shapes.forEach(shape => {
        // Update snelheid binnen interactieradius
        let distX = shape.x - mouseX;
        let distY = shape.y - mouseY;
        let distance = Math.sqrt(distX * distX + distY * distY);
        if (distance < interactionRadius) {
            let forceDirectionX = distX / distance;
            let forceDirectionY = distY / distance;
            let force = (interactionRadius - distance) / interactionRadius;
            shape.dx -= forceDirectionX * force * -0.05;
            shape.dy -= forceDirectionY * force * -0.05;
        }

        // Beweging en terugkaatsing
        shape.x += shape.dx;
        shape.y += shape.dy;
        if (shape.x <= 0 || shape.x >= canvas.width) shape.dx = -shape.dx; // Correcte terugkaatsing voor x-as
        if (shape.y <= 0 || shape.y >= canvas.height) shape.dy = -shape.dy; // Correcte terugkaatsing voor y-as
    });
}

// Vormen tekenen op canvas (zelf geschreven).
function drawAllShapes() {
    shapes.forEach(shape => {
        if (shape.type === 'diamond') {
            drawDiamond(shape.x, shape.y, shape.size);
        } else {
            drawGoldBar(shape.x, shape.y, shape.width, shape.height);
        }
    });
}

// Animatie loop (zelf geschreven).
function animate() {
    setBackground(); // Achtergrond resetten
    updateShapes(); // Posities van vormen updaten
    drawAllShapes(); // Alle vormen opnieuw tekenen
    requestAnimationFrame(animate); // Volgende frame van animatie aanvragen
}

canvas.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

createShapes(130); // 130 vormen aanmaken
animate(); // Animatie starten
