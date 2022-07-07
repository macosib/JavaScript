const menuItem = [...document.querySelectorAll(".menu__item")];
const menuLink = [...document.querySelectorAll(".menu__link")];

function cleanMenu() {
  menuItem.forEach((element, index) => {
    if (element.querySelector(".menu_active")) {
      menuItem[index]
        .querySelector(".menu_sub")
        .classList.toggle("menu_active");
    }
  });
}

menuLink.forEach((element) => {
  element.onclick = () => {
    parent = element.closest(".menu__item");
    cleanMenu();

    if (parent.querySelector(".menu_sub")) {
      parent.querySelector(".menu_sub").classList.toggle("menu_active");
      return false;
    }
  };
});
