import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTexteriaInput, 500));

textContectOnLocalStorage(); //виклик ф-цї яка відображає дані з локального сховища;

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTexteriaInput(event) {
  const { name, value } = event.target;
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function textContectOnLocalStorage() {
  const saveText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!saveText) {
    return;
  }
  console.log(saveText);
  Object.entries(saveText).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}
