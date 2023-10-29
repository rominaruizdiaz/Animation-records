var count = 0;

const display = document.querySelector('.display');
const displayNav = document.querySelector('.displayNav');

function updateDisplay() {
    display.textContent = count;
    displayNav.textContent = count;
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

window.onload = function() {
    var savedCount = localStorage.getItem('count');
    if (savedCount) {
        count = parseInt(savedCount);
        updateDisplay();
    }
}