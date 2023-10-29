var count = 0;
var carrito = [];

const display = document.querySelector('.display p');
const contadorCarritoNav = document.getElementById('contadorCarritoNav');
const contadorCarrito = document.getElementById('contadorCarrito');
const carritoElement = document.getElementById('carrito-lista');

function updateDisplay() {
  display.textContent = count;
}

function updateCarrito() {
  // Limpiar el contenido del carrito
  if (carritoElement) {
    carritoElement.innerHTML = '';
  }

  // Agregar los elementos del carrito al HTML
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto;
    if (carritoElement) {
      carritoElement.appendChild(li);
    }
  });
 // Actualizar la cantidad de productos en el carrito
 if (contadorCarritoNav) {
    contadorCarrito.textContent = carrito.length;
  }
  // Actualizar la cantidad de productos en el carrito
  if (contadorCarrito) {
    contadorCarrito.textContent = carrito.length;
  }
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

document.querySelector('.increment').addEventListener('click', () => {
  if (count < 10) {
    count++;
    updateDisplay();
    localStorage.setItem('count', count);
  }
});

document.querySelector('.decrement').addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
    localStorage.setItem('count', count);
  }
});

document.querySelector('#cart-btn-nav').addEventListener('click', () => {
  if (count > 0) {
    const cantidadSeleccionada = count;
    const producto = `Producto ${carrito.length + 1} - Cantidad: ${cantidadSeleccionada}`;
    carrito.push(producto);
    updateCarrito();
    guardarCarrito();
  }
});

document.querySelector('#cart-btn').addEventListener('click', () => {
    if (count > 0) {
      const cantidadSeleccionada = count;
      const producto = `Producto ${carrito.length + 1} - Cantidad: ${cantidadSeleccionada}`;
      carrito.push(producto);
      updateCarrito();
      guardarCarrito();
    }
  });
window.onload = function() {
  var savedCount = localStorage.getItem('count');
  if (savedCount) {
    count = parseInt(savedCount);
    updateDisplay();
  }

  var savedCarrito = localStorage.getItem('carrito');
  if (savedCarrito) {
    carrito = JSON.parse(savedCarrito);
    updateCarrito();
  }
}
