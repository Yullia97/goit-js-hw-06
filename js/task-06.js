    const input = document.getElementById('validation-input');

  input.addEventListener('blur', function () {
    const requiredLength = parseInt(input.getAttribute('data-length'), 10);
    const enteredLength = input.value.length;

    if (enteredLength === requiredLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });