const carrusel = document.querySelector('.carruseles');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

let posicionActual = 0;

btnLeft.addEventListener('click', function() {
  if (posicionActual > 0) {
    posicionActual--;
    carrusel.style.transform = `translateX(-${posicionActual * 100}%)`; 
  }
});

btnRight.addEventListener('click', function() {
  if (posicionActual < carrusel.children.length - 1) {
    posicionActual++;
    carrusel.style.transform = `translateX(-${posicionActual * 100}%)`; 
  }
});

