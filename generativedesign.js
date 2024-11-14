const canvas = document.getElementById('canvas');
const ctx =canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function setBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    //nog een kleur kiezen
    gradient.addColorStop(0, '#');
    gradient.addColorStop(1, '#');
    ctx.fillstyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}