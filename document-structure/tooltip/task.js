const links = [...document.querySelectorAll(".has-tooltip")];
let tooltip;

links.forEach((element) => {
  element.addEventListener("click", showTooltip);
});

function getHtmlElement(text) {
  return `<div class="tooltip">${text}</div>`;
}

function setPosition(element) {
  let position = element.getBoundingClientRect();
  tooltip.innerText = element.title;
  tooltip.style.left = `${position.left}px`;
  tooltip.style.top = `${position.bottom}px`;
}

function addTooltip(element, create = true) {
  if (!create) {
    element.insertAdjacentHTML("afterend", getHtmlElement(element.title));
    tooltip = document.querySelector(".tooltip");
  }
  setPosition(element);
  if (!tooltip.classList.contains("tooltip_active")) {
    tooltip.classList.toggle("tooltip_active");
  }
}

function tooltipActivate() {}

function showTooltip(e) {
  if (tooltip && tooltip.innerText === e.target.title) {
    tooltip.classList.toggle("tooltip_active");
  } else if (tooltip) {
    addTooltip(e.target);
  } else {
    addTooltip(e.target, false);
  }
  e.preventDefault();
}
