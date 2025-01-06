`use strict`;

function checkForSpam(message) {
  const textLower = message.toLowerCase();

  if (textLower.includes(`sale`) || textLower.includes(`spam`))
    return Boolean(true);
  else return Boolean(false);
}

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('Trust me, this is not a spam message'));

console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('JavaScript weekly newsletter'));
