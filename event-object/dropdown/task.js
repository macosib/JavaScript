const menu = [...document.querySelectorAll('.dropdown')]

menu.forEach(element => {

  const currentItem = element.querySelector('.dropdown__value')
  const dropdownList = element.querySelector('.dropdown__list')
  const links = [...element.querySelectorAll('.dropdown__link')]

  function activateDeactivate() {
    dropdownList.classList.toggle('dropdown__list_active');
  }

  function replaceLink(e) {
    e.preventDefault()
    currentItem.textContent = e.target.textContent
    activateDeactivate()
  }

  currentItem.addEventListener('click', activateDeactivate)
  links.forEach(element => element.addEventListener('click', replaceLink))

})
