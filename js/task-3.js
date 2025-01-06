`use strict`;

function getElementWidth(content, padding, border) {
  const num1 = parseFloat(content);
  const num2 = parseFloat(padding);
  const num3 = parseFloat(border);

  return num1 + num2 * 2 + num3 * 2;
}

getElementWidth(`50px`, `8px`, `4px`);
console.log(getElementWidth(`50px`, `8px`, `4px`));

getElementWidth(`60px`, `12px`, `8.5px`);
console.log(getElementWidth(`60px`, `12px`, `8.5px`));

getElementWidth(`200px`, `0`, `0`);
console.log(getElementWidth(`200px`, `0`, `0`));

// return content + padding * 2 + border * 2
