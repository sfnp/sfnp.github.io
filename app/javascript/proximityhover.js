const anchor = document.getElementById('anchor');
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width;
const anchorY = rekt.top + rekt.height;
const eyes = document.querySelectorAll('.eye');

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;


    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${270 + angleDeg}deg)`
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`
    })

})
function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

function gopherOn() {
    anchor.style.opacity = '1';
}

function gopheroff() {
    anchor.style.opacity = '0';
}


document.addEventListener('keydown', s => {
    if (s.keyCode === 71) {
        if(gopher.style.opacity !== '1') {
        gopherOn();
        alert("YOU HAVE UNLEASED THE GOPHER MONSTER. click \'g\' to remove it.");
        }
        else {
            gopheroff();
            alert('You have removed THE GOPHER MONSTER.')
        }
    }
})