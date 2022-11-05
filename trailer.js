const trailer = document.getElementById("trailer");

function rainbow() {
  trailer.style.backgroundColor = "red";
}

function polako() {
  trailer.style.backgroundColor = "white";
}

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
    border: `1px solid ${interacting ? 'white' : 'transparent'}`,
  }


  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  });

  // trailer.animate(bruh, {
  //   duration: 500,
  //   fill: 'backwards',
  // })
}


const getTrailerClass = type => {
  return "fa-solid fa-arrow-up";
}

const getTrailerText = type => {
  return 'bruh';
}

window.onmousemove = e => {
  const interactable = e.target.closest(".tra")
  const text = e.target.closest(".text"),
    interacting = interactable !== null;
  textable = text !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting, text);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}

document.addEventListener('keydown', r => {
    if (r.keyCode === 82) {
      if (trailer.style.backgroundColor !== 'red') {
        rainbow()
        alert('You have unlocked a rainbow color for your cursor. press d to remove it.');
      }
    }

    if (r.keyCode === 68) {
      if (trailer.style.backgroundColor === 'red') {
      alert('Removed rainbow color.');
      polako();
      }
    }
})