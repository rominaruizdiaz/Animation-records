let count = 0;
        const display = document.querySelector('.display');

        document.querySelector('.increment').addEventListener('click', () => {
            if (count < 10) {
                count++;
                display.textContent = count;
            }
        });

        document.querySelector('.decrement').addEventListener('click', () => {
            if (count > 0) {
                count--;
                display.textContent = count;
            }
        });