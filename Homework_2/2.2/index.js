const goods = {
  1: {
    id: 1,
    name: 'shirt',          
    description: 'green shirt',   
    sizes: [42, 44, 48, 50 ,52],    
    price: 200,         
    available: true 
  },
  2: {
    id: 2,
    name: 'T-shirt',          
    description: 'white shirt',   
    sizes: [42, 44, 48, 50 ,52],    
    price: 300,         
    available: true 
  },
  3: {
    id: 3,
    name: 'jeans',          
    description: 'blue jeans',   
    sizes: [48, 50 ,52],    
    price: 500,         
    available: true 
  },
  4: {
    id: 4,
    name: 'hat',          
    description: 'black jeans',   
    sizes: [42, 50 ,54],    
    price: 100,         
    available: true 
  },
  5: {
    id: 5,
    name: 'jacket',          
    description: 'super jacket',   
    sizes: [42, 46, 50],    
    price: 1000,         
    available: true 
  },
}

const goodsIndex = [goods[1], goods[2], goods[3], goods[4], goods[5],];


let basket = [
  {
    good: goodsIndex[0],
    amount : 4
  }, 
  { 
    good: goodsIndex[1],
    amount : 2
  }
]

function addGoods (id, amount) {
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].good.id == id) {
      basket[i].amount += amount
      return
    }
  }
  { 
    basket.push({
        good: goodsIndex[id - 1],
        amount: amount,
    })
}
  }


function delGoods (id) {
  for (let i = 0; i < basket.length; i++) {
   if (basket[i].good.id == id) {
      basket.splice(i, 1)
    }
  }
}

function delAllGoods () {
  basket = []
}

function totalAmountAndPriceGoods () {
  let totalAmount = 0;
  let totalSumm = 0;
  for (let product of basket) {
    totalAmount += product.amount;
    totalSumm += product.good.price * product.amount;
  }
  return {
    totalAmount: totalAmount,
    totalSumm: totalSumm,
  }
}

function main () {
  addGoods(2, 3);
  addGoods(4, 5);
  delGoods (1);
  // delAllGoods ()
  console.log(totalAmountAndPriceGoods());
}

console.log(main())