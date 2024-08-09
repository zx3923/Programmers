const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
const arr = input[1].trim().split(" ").map(Number);
let count = 0;
for (let i = 0; i < N; i++) {
  if (getDivisors(arr[i]).length === 2) {
    count++;
  }
}
console.log(count);

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
  return divisors;
}
