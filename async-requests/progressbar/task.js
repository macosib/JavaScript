const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.upload.addEventListener('progress', (e) => {
    progress.value = e.loaded / e.total;
  });

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);

  xhr.onloadend = function () {
    if (xhr.status == 200) {
      console.log('Данные успешно отправлены.');
    } else {
      console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
    }
  };
});
