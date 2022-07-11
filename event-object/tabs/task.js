const tab = document.querySelector('#tabs1')
const tabs = [... tab.querySelectorAll('.tab')]
const tabContent = [... tab.querySelectorAll('.tab__content')]

function activateDeactivate(indexCurrent, indexNext) {
  tabs[indexCurrent].classList.toggle('tab_active')
  tabs[indexNext].classList.toggle('tab_active')
  tabContent[indexCurrent].classList.toggle('tab__content_active')
  tabContent[indexNext].classList.toggle('tab__content_active')
}

function replaceTab(e) {
  indexCurrent = tabs.map(elem => elem.classList.value).indexOf('tab tab_active');
  indexNext = tabs.map(elem => elem.textContent).indexOf(e.target.textContent);
  activateDeactivate(indexCurrent, indexNext)
}

tabs.forEach(element => element.addEventListener('click', replaceTab))
