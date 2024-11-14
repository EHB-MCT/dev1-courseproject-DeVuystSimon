const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function setBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1e3c72');
    gradient.addColorStop(1, '#2a69ac');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawDiamond(ctx, cx, cy, size) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - size * 1.2);
    ctx.lineTo(cx + size * 0.6, cy);
    ctx.lineTo(cx, cy + size * 1.2);
    ctx.lineTo(cx - size * 0.6, cy);
    ctx.closePath();
    ctx.fillStyle = '#A7D3E0';
    ctx.fill();
}

function drawGoldBar(ctx, cx, cy, width, height) {
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(cx - width / 2, cy - height / 2, width, height);
}

function drawRandomShape(x, y, size) {
    const shapeType = Math.floor(Math.random() * 2);

    if (shapeType === 0) {
        drawDiamond(ctx, x, y, size);
    } else {
        const barLength = Math.random() < 0.5 ? size * 4 : size * 6;
        const barHeight = size * 0.5;
        drawGoldBar(ctx, x, y, barLength, barHeight);
    }
}

function drawShapes(numShapes) {
    for (let i = 0; i < numShapes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 30 + 20;
        drawRandomShape(x, y, size);
    }
}

setBackground();
drawShapes(130);

window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setBackground();
    drawShapes(130);
});