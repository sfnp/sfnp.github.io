const trailer = document.getElementById("trailer");
const gopher = document.getElementById('anchor');

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

function rainbow() {
  trailer.style.backgroundColor = "red";
}

function polako() {
  trailer.style.backgroundColor = "white";
}

function cursorOn() {
  trailer.style.display = 'grid';
  trailer.style.pointerEvents = 'none';
}



function cursorOff() {
  trailer.style.display = 'none';
}

function gopherOn() {
  gopher.style.display = 'block';
}

const gopherOff = () => {
  gopher.style.display = 'none';
}

document.addEventListener('keydown', r => {
    console.log(r);
  if (r.keyCode === 72) {
    alert(`YOU HAVE FOUND A SECRET THING!!! TYPE THIS LETTERS TO UNLOCK THE FOLLOWING: \n'\ c '\ = cursor on/off \n \t '\ r '\ = rainbow cursor on/off \n \' g \' = Gopher Monster Show/Hide`)
  }

  if (trailer.style.display === 'grid') {
    if (r.keyCode === 82) {
      if (trailer.style.backgroundColor !== 'red') {
        rainbow()
        alert('You have unlocked a rainbow color for your cursor. press \'r\' again to remove it.');
      }
      else {
        polako();
        alert('Removed rainbow color.');

      }
    }


    // if (r.keyCode === 68) {
    //   if (trailer.style.backgroundColor === 'red') {
    //     alert('Removed rainbow color.');
    //     polako();
    //   }
    // }
  }




  if (r.keyCode === 67) {
    if (trailer.style.display !== 'grid') {
      alert("YOU HAVE ENABLED CURSOR CLICK \'c\' again to remove it")
      cursorOn()
    }
    else {
      cursorOff()
      alert("TO REMOVE THE CURSOR CLICK OK")
    }
  }
});