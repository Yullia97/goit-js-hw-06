 let counterValue = 0;
  const valueSpan = document.getElementById('value');

  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');

  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
  });

  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounterValue();
  });

  function updateCounterValue() {
    valueSpan.textContent = counterValue;
  }