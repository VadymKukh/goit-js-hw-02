`use strict`;

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const sum = quantity * pricePerDroid;

  return sum > customerCredits
    ? `Insufficient funds!`
    : `You ordered ${quantity} droids worth ${sum} credits!`;
}

makeTransaction(5, 3000, 23000);
console.log(makeTransaction(5, 3000, 23000));

makeTransaction(8, 2000, 10000);
console.log(makeTransaction(8, 2000, 10000));
