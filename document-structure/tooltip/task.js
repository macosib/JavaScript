const links = [...document.querySelectorAll('.has-tooltip')];

links.forEach((element) => {
  element.addEventListener('click', setPopup);
  element.insertAdjacentHTML('afterend', getHtmlElement(element.title));
});

function getHtmlElement(text) {
  return `<div class="tooltip">${text}</div>`;
}

function hidePopup() {
  tooltipActive = [...document.querySelectorAll('.tooltip_active')];
  tooltipActive.forEach((element) => {
    element.classList.remove('tooltip_active');
  });
}

function setPopup(e) {
  if (e.target.nextSibling.classList.contains('tooltip_active')) {
    hidePopup();
  } else {
    hidePopup();
    tooltip = e.target.nextSibling;
    tooltip.classList.toggle('tooltip_active');
    position = e.target.getBoundingClientRect();
    tooltip.style.left = `${position.left}px`;
    tooltip.style.top = `${position.bottom}px`;
  }
  e.preventDefault();
}
