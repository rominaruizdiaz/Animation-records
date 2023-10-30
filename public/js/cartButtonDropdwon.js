document.querySelector('#cart-btn').addEventListener('click', () => {
  if (count > 0) {
    const cantidadSeleccionada = count;
    const producto = `Producto ${carrito.length + 1} - Cantidad: ${cantidadSeleccionada}`;
    carrito.push(producto);
    updateCarrito();
    guardarCarrito();

    // Agregar el producto al menú desplegable
    const dropdown = document.getElementById('myDropdown');
    const a = document.createElement('a');
    a.textContent = producto;
    dropdown.appendChild(a);
  }
});
