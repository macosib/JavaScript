const popup = document.getElementById("modal_main");
const popupSuccess = document.getElementById("modal_success");
const btnSwitch = [...document.querySelectorAll(".btn")];
const popupClose = [...document.querySelectorAll(".modal__close_times")];

function modalActivePopup() {
  popup.classList.add("modal_active");
}

function modalActivePopupSuccess() {
  popupSuccess.classList.add("modal_active");
}

function modalActiveOff() {
  popup.classList.remove("modal_active");
  popupSuccess.classList.remove("modal_active");
}

function switchPopup() {
  let counter = 0;
  return () => {
    modalActiveOff();
    if (counter % 2 !== 0) {
      modalActivePopup();
    } else {
      modalActivePopupSuccess();
    }
    counter++;
  };
}

modalActivePopup();
btnS = switchPopup();

btnSwitch.forEach((element) => element.addEventListener("click", btnS));

popupClose.forEach((element) => {
  element.addEventListener("click", modalActiveOff);
});
