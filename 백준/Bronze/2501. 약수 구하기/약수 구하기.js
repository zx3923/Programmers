const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const N = parseInt(input[0]);
const K = parseInt(input[1]);

const divisors = getDivisors(N);
if (divisors.length >= K) {
  console.log(divisors[K - 1]);
} else {
  console.log(0);
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
