const loader = document.querySelector('.loader_active');
const items = document.querySelector('#items');

async function getExchangeRate() {
  const baseUrl = 'https://netology-slow-rest.herokuapp.com/';
  let response = await fetch(baseUrl);
  let data = await response.json();
  return data['response']['Valute'];
}

function parseData(data) {
  for (let item of Object.values(data)) {
    const code = item['CharCode'];
    const value = item['Value'];
    items.insertAdjacentHTML('beforeend', displayCurrency(code, value));
  }
}

function displayCurrency(code, value) {
  return `<div class="item"><div class="item__code">${code}</div>
<div class="item__value">${value}</div>
<div class="item__currency">руб.</div></div>`;
}

async function main() {
  const data = await getExchangeRate();
  await parseData(data);
  loader.classList.toggle('loader_active');
}

main();
