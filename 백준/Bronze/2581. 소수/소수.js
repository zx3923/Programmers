const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const M = parseInt(input[0]);
const N = parseInt(input[1]);
let minPrime = -1;

let sum = 0;

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    sum += i;
    if (minPrime === -1) {
      minPrime = i; // 첫 번째 소수일 경우에만 최소값 갱신
    }
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minPrime);
}

function isPrime(n) {
  if (n < 2) return false;
  const sqrt = Math.sqrt(n);

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
