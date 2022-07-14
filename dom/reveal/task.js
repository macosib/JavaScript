const blog = [...document.querySelectorAll('.reveal')]

function toggle(element) {
  element.classList.toggle('reveal_active')
}

function getPosition() {
  blog.forEach(element => {
    if (isVisable(element) && !element.classList.contains('reveal_active')) {
      toggle(element)
    }
    if (!isVisable(element) && element.classList.contains('reveal_active')) {
      toggle(element)
    }
  });

}

function isVisable(elem) {
  const {top, bottom} = elem.getBoundingClientRect()
  return((bottom > 0) && (top < window.innerHeight))
}

window.addEventListener('scroll', getPosition);
