const formElement = document.querySelector('#myForm');
const inputElement = document.querySelector('.required-field');
const errorMessage = document.querySelector('.error-message');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (inputElement.value === '') {
    inputElement.classList.add('error');
    errorMessage.textContent = 'This field is required';
    errorMessage.style.display = 'block';
  } else {
    inputElement.classList.remove('error');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    formElement.submit();
  }
});
