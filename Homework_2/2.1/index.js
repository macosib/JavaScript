function primeNumber (number) {
  if (number === 0 || number === 1) {
    return false;
  }
  let count = 0;
  for (let i = 1; i < Math.round(Math.sqrt(number)) + 1; i++) {
    if (number % i === 0) {
        count++;
      }
    if (count > 1) {
        return false;
      }
    }
  return true
}

function amountNumbers(amout) {
  let primeNumbers = [];
  let i = 2;
  while (primeNumbers.length !== +amout) {
    if (primeNumber(i)) {
      primeNumbers.push(i);
    }
    i++;
        }
  return primeNumbers;
}
    
console.time();
console.log(amountNumbers(process.argv[2]));
console.timeEnd();
 