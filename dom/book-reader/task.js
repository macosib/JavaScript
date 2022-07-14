const book = document.getElementById('book');
const content = document.querySelector('.book__content');

const fontText = [
  ...book
    .querySelector('.book__control_font-size')
    .querySelectorAll('.font-size'),
];
const colorText = [
  ...book.querySelector('.book__control_color').querySelectorAll('.color'),
];
const backgroundText = [
  ...book.querySelector('.book__control_background').querySelectorAll('.color'),
];

style = {
  book_fs: ['book_fs-big', 'book_fs-small'],
  book_color: ['book_color-gray', 'book_color-whitesmoke', 'book_color-black'],
  book_bg: ['book_bg-gray', 'book_bg-black', 'book_bg-white'],
};

book.addEventListener('click', setValue);

function setValue(e) {
  if (e.target.classList.contains('font-size')) {
    setStyle(e.target, fontText, 'font-size');
  } else if (
    e.target.classList.contains('color') &&
    e.target.closest('.book__control_color')
  ) {
    setStyle(e.target, colorText);
  } else {
    setStyle(e.target, backgroundText);
  }
  e.preventDefault();
}

function setStyle(el, array, tag = 'color') {
  array.forEach((element) => {
    if (element.classList.contains(`${tag}_active`)) {
      element.classList.remove(`${tag}_active`);
    }
  });
  el.classList.add(`${tag}_active`);
  setActiveFontBook(el);
}

function setClass(nameClass, param) {
  style[nameClass].forEach((element) => {
    if (book.classList.contains(element)) {
      book.classList.remove(element);
    }
  });
  book.classList.add(`${nameClass}-${param}`);
}

function setActiveFontBook(el) {
  const size = el.dataset.size;
  const color = el.dataset.textColor;
  const background = el.dataset.bgColor;

  if (color) {
    setClass('book_color', color);
  } else if (background) {
    setClass('book_bg', background);
  } else {
    setClass('book_fs', size);
  }
}
