const products = [...document.querySelectorAll(".product")];
const cart = document.querySelector(".cart__products");

products.forEach((element) => {
  element.addEventListener("click", main);
});

function main(e) {
  if (e.target.classList.contains("product__quantity-control")) {
    changeQuantityProduct(e.target);
  }
  if (e.target.classList.contains("product__add")) {
    addProductToCart(e.target);
  }
}

function changeQuantityProduct(item) {
  const parent = item.closest(".product__quantity-controls");
  let counterProduct = parent.querySelector(".product__quantity-value");

  if (item.classList.contains("product__quantity-control_dec")) {
    if (+counterProduct.innerText > 1) {
      counterProduct.innerText = +counterProduct.innerText - 1;
    }
  } else {
    counterProduct.innerText = +counterProduct.innerText + 1;
  }
}

function createNewCartProduct(id, path, amount) {
  return `<div class="cart__product" data-id="${id}">
  <img class="cart__product-image" src="${path}">
  <div class="cart__product-count">${amount}</div>
  </div>`;
}

function addProductToCart(item) {
  const parent = item.closest(".product");
  const productId = parent.getAttribute("data-id");
  const imagePath = parent.querySelector("img").getAttribute("src");
  const amount = Number(
    parent.querySelector(".product__quantity-value").innerText
  );

  const ProductInCart = [...cart.querySelectorAll(".cart__product")].find(
    (product) => product.getAttribute("data-id") == productId
  );

  if (!ProductInCart) {
    cart.insertAdjacentHTML(
      "beforeend",
      createNewCartProduct(productId, imagePath, amount)
    );
  } else {
    ProductInCart.querySelector(".cart__product-count").innerText =
      +ProductInCart.querySelector(".cart__product-count").innerText + amount;
  }
}
