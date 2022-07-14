const rotator = [...document.querySelectorAll('.rotator')];
let speed = 1000;

function main(element) {
  const rotatorText = [...element.querySelectorAll('.rotator__case')];
  const indexCurrent = rotatorText
    .map((elem) => elem.classList.value)
    .indexOf('rotator__case rotator__case_active');
  const indexNext =
    indexCurrent + 1 === rotatorText.length ? 0 : indexCurrent + 1;
  activateDeactivate(rotatorText, indexCurrent, indexNext);
  changeColor(rotatorText, indexNext);
}

function changeColor(currentArray, index) {
  const item = currentArray[index];
  const speedItem = item.dataset.speed;
  const color = item.dataset.color;
  item.style.color = item.dataset.color;
  speed = item.dataset.speed;
}

function activateDeactivate(currentArray, indexCurrent, indexNext) {
  currentArray[indexCurrent].classList.toggle('rotator__case_active');
  currentArray[indexNext].classList.toggle('rotator__case_active');
}

rotator.forEach((element) => {
  setTimeout(function run() {
    main(element);
    setTimeout(run, speed);
  }, speed);
});
