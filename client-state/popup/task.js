const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close_times');

function getCookie(name) {
  var matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function modalActiveDeactivePopup() {
  popup.classList.toggle('modal_active');
}

function main() {
  console.log(document.cookie);

  if (!getCookie('popupCookie')) {
    console.log('first');
    modalActiveDeactivePopup();
  }
}

popupClose.addEventListener('click', () => {
  setCookie('popupCookie', 'testValue');
  modalActiveDeactivePopup();
});

main();
