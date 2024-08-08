const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
while (input[i] !== "-1") {
  const N = parseInt(input[i]);
  const divisors = getDivisors(N);
  const last = divisors.pop();
  const sum = divisors.reduce((acc, cur) => acc + cur, 0);
  if (sum === last) {
    console.log(`${N} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${N} is NOT perfect.`);
  }
  i++;
}

function getDivisors(n) {
  const divisors = [];
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  divisors.sort((a, b) => a - b);
  return divisors;
}
