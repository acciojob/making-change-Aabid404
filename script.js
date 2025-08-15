function makeChange(amount) {
  let q = Math.floor(amount / 25);
  amount %= 25;

  let d = Math.floor(amount / 10);
  amount %= 10;

  let n = Math.floor(amount / 5);
  amount %= 5;

  let p = amount; // remaining cents are pennies

  return { q, d, n, p };
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
