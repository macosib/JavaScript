let numberSlide = 0;
const sliderItems = [...document.querySelectorAll(".slider__item")];
const sliderArrowsPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowsNext = document.querySelector(".slider__arrow_next");
const sliderDots = [...document.querySelectorAll(".slider__dot")];

document.querySelector(".slider__dot").classList.toggle("slider__dot_active");

function activate_deactivate(index) {
  sliderItems[index].classList.toggle("slider__item_active");
  sliderDots[index].classList.toggle("slider__dot_active");
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
  activate_deactivate(numberSlide);
  activate_deactivate(
    check(this.classList.contains("slider__arrow_prev") ? -1 : 1)
  );
}

function dot_active(index) {
  activate_deactivate(numberSlide);
  activate_deactivate(index);
  numberSlide = index;
}

sliderArrowsPrev.onclick = step;
sliderArrowsNext.onclick = step;

sliderDots.forEach((element, index) => {
  element.onclick = () => {
    dot_active(index);
  };
});
