var cartBtn = document.getElementById('cart-btn');
var cartCount = document.querySelector('.cart-count');
var count = 0;

document.querySelector('.increment').addEventListener('click', () => {
  if (count < 10) {
    count++;
    updateDisplay();
    cartCount.textContent = count;
    localStorage.setItem('count', count);
  }
});

document.querySelector('.decrement').addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
    cartCount.textContent = count;
    localStorage.setItem('count', count);
  }
});

window.onload = function() {
  var savedCount = localStorage.getItem('count');
  if (savedCount) {
    count = parseInt(savedCount);
    updateDisplay();
    cartCount.textContent = count;
  }
}

function updateDisplay() {
    display.textContent = count;
    displayNav.textContent = count;
}
