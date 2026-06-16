function getSquareSum(num) {
  let total = 0;
  while (num > 0) {
    let digit = num % 10;
    total = total + (digit * digit);
    num = Math.floor(num / 10);
  }
  return total;
}

function isHappy(n) {
  let seenNumbers = [];
  while (n !== 1 && !seenNumbers.includes(n)) {
    seenNumbers.push(n);
    n = getSquareSum(n);
  }
  return n === 1;
}

let happyNumbers = [];
let currentNumber = 1;

while (happyNumbers.length < 5) {
  if (isHappy(currentNumber)) {
    happyNumbers.push(currentNumber);
  }
  currentNumber = currentNumber + 1;
}

console.log("The first 5 happy numbers are:", happyNumbers);
