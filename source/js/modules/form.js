const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form__input');

form.addEventListener('submit', (e) => {
  if(!form.checkValidity()) {
    e.preventDefault();

    inputs.forEach((input) =>{
      if(!input.validity.valid) {
        input.classList.add('form__input--invalid');
      }else {
        input.classList.remove('form__input--invalid');
      }
    });
  } else {
    inputs.forEach((input) =>{
      input.classList.remove('form__input--invalid');
    });
  }
});

inputs.forEach((input) =>{
  input.addEventListener('input', () =>{
    input.classList.remove('form__input--invalid');
  });
});

// nameInput.addEventListener('invalid', (e) =>{
//   e.preventDefault();
//   nameInput.classList.add('form__input--error');
//   nameError.textContent = 'Имя может содержать только буквы и пробелы';
// });

// telInput.addEventListener('invalid', (e) =>{
//   e.preventDefault();
//   telInput.classList.add('form__input--error');
//   telError.textContent = 'Введите полный номер телефона';
// });
