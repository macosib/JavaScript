let numberSlide = 0;
const sliderItems = [...document.querySelectorAll(".slider__item")];
const sliderArrowsPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowsNext = document.querySelector(".slider__arrow_next");
const sliderDots = [...document.querySelectorAll(".slider__dot")];

document.querySelector(".slider__dot").classList.toggle("slider__dot_active");

function activate(index) {
  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
}
function deactivate(index) {
  sliderItems[numberSlide].classList.remove("slider__item_active");
  sliderDots[numberSlide].classList.remove("slider__dot_active");
}

function check(value) {
  if (numberSlide + value > sliderItems.length - 1) {
    numberSlide = 0;
  } else if (numberSlide + value < 0) {
    numberSlide = sliderItems.length - 1;
  } else {
    numberSlide += value;
  }
  return numberSlide;
}

function step() {
  deactivate(numberSlide);
  let value = this.classList.contains("slider__arrow_prev") ? -1 : 1;
  activate(check(value));
}

function dot_active(index) {
  deactivate(numberSlide);
  activate(index);
  numberSlide = index;
}

sliderArrowsPrev.onclick = step;
sliderArrowsNext.onclick = step;

sliderDots.forEach((element, index) => {
  element.onclick = () => {
    dot_active(index);
  };
});
