const textarea = document.querySelector('#editor');
const button = document.querySelector('.button');
let textSaved = localStorage.getItem('textSaved');

if (textSaved) {
  console.log(textSaved);
  textarea.textContent = textSaved;
}

textarea.addEventListener('input', () => {
  const textInput = textarea.value;
  localStorage.setItem('textSaved', textInput);
});

button.addEventListener('click', () => {
  textarea.value = '';
  localStorage.removeItem('textSaved');
});
