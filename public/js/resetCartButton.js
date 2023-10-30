const resetButton = document.querySelector('.reset-button');
const dropdownItems = document.querySelectorAll('.dropdown-content li');

resetButton.addEventListener('click', () => {
  carrito = [];
  count = 0;
  updateCarrito();
  guardarCarrito();

  // Borrar todos los elementos li en el menú desplegable
  const dropdownItems = document.querySelectorAll('.dropdown-content li');
  dropdownItems.forEach(item => {
    item.remove();
  });
});



