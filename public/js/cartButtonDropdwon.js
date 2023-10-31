const dropdownMenu = document.querySelector('.dropdown-content');
  document.querySelector('#cart-btn').addEventListener('click', () => {
    if (count > 0) {
      const cantidadSeleccionada = count;
      const producto = `Producto ${carrito.length + 1} - Cantidad: ${cantidadSeleccionada}`;
      carrito.push(producto);
      updateCarrito();
      guardarCarrito();
      // Agregar el producto al menú desplegable
      const titleDetail = document.getElementById('title-detail').textContent;
      const priceDetail = document.getElementById('price-detail').textContent;
      const display = document.getElementById('display').textContent;
      const titleLi = document.createElement('li');
      titleLi.textContent = `Title: ${titleDetail}`;
      dropdownMenu.appendChild(titleLi);
      const priceLi = document.createElement('li');
      priceLi.textContent = `Price: ${priceDetail}`;
      dropdownMenu.appendChild(priceLi);
      const quantityLi = document.createElement('li');
      quantityLi.textContent = `Quantity: ${display}`;
      dropdownMenu.appendChild(quantityLi);
    }
  });