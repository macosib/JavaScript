class Good {
  constructor(id, name, descripton, sizes, price, available) {
    this.id = id;
    this.name = name;
    this.descripton = descripton;
    this.sizes = sizes;
    this.price = price;
    this.available = available;
  }

  setAvailable(available=false) {
    return this.available = available;
  }

}

class GoodsList {

  #goods;

  constructor(filter, sortPrice=false, sortDir=true) {
    this.#goods = [] 
    this.filter = new RegExp(`${filter}`, 'i');
    this.sortPrice = sortPrice;
    this.sortDir = sortDir; 
  }

  get list() {
    const data = this.#goods.filter(product => this.filter.test(product.name));
    if (!this.sortPrice) {
      return data;
    }
    if (this.sortDir) {
      return data.sort((start, next) => start.price - next.price > 0 ? 1 : -1);
    }
    return data.sort((start, next) => start.price - next.price > 0 ? -1 : 1);
  }

  add(good) {
    if (this.#goods.findIndex(product => product.id === good.id) < 0) {
      return this.#goods.push(good);
    }
  }

  remove(id) {
    const productIndex = this.#goods.findIndex(product => product.id === id);
    if (productIndex > -1) {
      return this.#goods.splice(productIndex, 1)
    }
  }
}

class BasketGood extends Good {

  constructor(id, name, descripton, sizes, price, available, amount) {
    super(id, name, descripton, sizes, price, available);
    this.amount = amount;
  }
}

class Basket {

  constructor() {
    this.goods = [];
  }

  add(good, amount) {
    const productIndex = this.goods.findIndex(product => product.id === good.id);
    if (productIndex > -1) {
      return this.goods[productIndex].amount += amount;
    }
    const product = new BasketGood(good.id, good.name, good.descripton, good.sizes, good.price, good.available, amount);
    return this.goods.push(product);
  }

  remove(good, amount) {
    const productIndex = this.goods.findIndex(product => product.id === good.id);
    if (productIndex > -1) {
      if (amount < this.goods[productIndex].amount) {
        return this.goods[productIndex].amount -= amount;
        }
      return this.goods.splice(productIndex, 1);
    }
  }

  clear(){
    return this.goods.length = 0;
  }

  removeUnavailable(){
    return this.goods = this.goods.filter(product => product.available === true);
  }  

  get totalAmount() {
    return this.goods.reduce((total, current) => total + current.amount, 0);
    // let total = 0;
    // this.goods.forEach(value => total += value.amount);
    // return total
  }

  get totalSum() {
    return this.goods.reduce((sum, current) => sum + current.amount * current.price, 0);
  }
} 

function main() {

  const product1 = new Good(1, 'Джинсы 502™ Taper', 'Хлопок - 99%, Эластан - 1%', [28, 30, 32, 34], 16000, true);
  const product2 = new Good(2, 'Джинсы 512™ SLIM TAPER', 'Хлопок - 99%, Эластан - 1%', [30, 34, 36, 38], 14500, true);
  const product3 = new Good(3, 'Футболка Levis blue', 'Хлопок - 100%', ['S', 'M', 'L'], 3900, true);
  const product4 = new Good(4, 'Футболка Levis red', 'Хлопок - 100%', ['S', 'M', 'L', 'XL'], 4900, true);
  const product5 = new Good(5, 'Футболка Levis green', 'Хлопок - 100%', ['S', 'L', 'XL'], 2900, true);
  const product6 = new Good(6, 'Футболка Levis yellow', 'Хлопок - 100%', ['S', 'L', 'XL'], 1900, true);

  product1.setAvailable();
  product6.setAvailable();

  const productList = new GoodsList('', false, false);
  // const productList = new GoodsList('levis', false, false);
  // const productList = new GoodsList('levis', true, false);
  // const productList = new GoodsList('levis', true, true);
  // const productList = new GoodsList('5', true, true);
  

  productList.add(product1);
  productList.add(product2);
  productList.add(product3);
  productList.add(product4);
  productList.add(product5);
  productList.add(product6);
  productList.add(product1);
  // console.log(productList.list)

  // console.log(productList.list)
  // productList.remove(2)
  // productList.remove(4)
  // console.log(productList.list)

  const order = new Basket()

  order.add (product1, 3)
  order.add (product6, 6)
  order.add (product4, 7)
  order.add (product1, 7)
  order.add (product2, 4)
  // console.log(order.goods)

  // order.remove(product1 , 5)
  // order.remove(product6 , 6)
  // console.log(order.goods)

  // order.clear()
  // console.log(order.goods)

  // order.removeUnavailable()
  // console.log(order.goods)

  console.log(order.totalAmount)
  // console.log(order.totalSum)
}

main()
