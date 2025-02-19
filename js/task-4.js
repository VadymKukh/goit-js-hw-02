`use strict`;

function getShippingCost(country) {
  switch (country) {
    case `China`:
      return `Shipping to ${country} will cost 100 credits`;
      break;
    case `Chile`:
      return `Shipping to ${country} will cost 250 credits`;
      break;
    case `China`:
      return `Shipping to ${country} will cost 170 credits`;
      break;
    case `China`:
      return `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost(`China`));

console.log(getShippingCost('Chile'));

console.log(getShippingCost('Sweden'));
