const sliderItems = [...document.querySelectorAll(".slider__item")];
let counter = 0;

sliderArrowsPrev = document.querySelector(".slider__arrow_prev");
sliderArrowsNext = document.querySelector(".slider__arrow_next");
sliderDots = [...document.querySelectorAll(".slider__dot")];

function step() {
  sliderItems.forEach((element) =>
    element.classList.toggle("slider__item_active", false)
  );

  let value = this.classList.contains("slider__arrow_prev") ? -1 : 1;

  if (counter === 0 && value === -1) {
    counter = 4;
  } else if (counter === 4 && value === 1) {
    counter = 0;
  } else {
    counter += value;
  }

  sliderItems[counter].classList.toggle("slider__item_active");
}

function dot_active(index) {
  sliderItems.forEach((element) =>
    element.classList.remove("slider__item_active")
  );
  sliderItems[index].classList.toggle("slider__item_active");
  counter = index;
}

sliderDots.forEach((element, index) => {
  element.onclick = () => {
    dot_active(index);
  };
});

sliderArrowsPrev.onclick = step;
sliderArrowsNext.onclick = step;
