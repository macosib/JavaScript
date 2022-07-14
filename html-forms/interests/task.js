checkBoxParents = [...document.querySelectorAll('.interest__check')];

checkBoxParents.forEach((element) => {
  element.addEventListener('change', setChoise);
});

function setChoise(e) {
  const parent = e.target.closest('.interests_active');

  if (!parent) {
    child =
      e.target.parentNode.nextElementSibling.querySelectorAll(
        '.interest__check'
      );

    child.forEach((element) => {
      if (e.target.checked === true) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  }
}
