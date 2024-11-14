const canvas = document.getElementById('canvas');
const ctx =canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function setBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    //nog een kleur kiezen
    gradient.addColorStop(0, '#1e3c72');
    gradient.addColorStop(1, '#2a69ac');
    ctx.fillstyle = gradient;
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

