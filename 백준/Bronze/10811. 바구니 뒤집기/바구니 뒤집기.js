const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (value, i) => i + 1);

for (let i = 0; i < M; i++) {
  const [start, end] = input[i + 1].split(" ").map(Number);
  const copyArr = arr.slice(start - 1, end).reverse();
  for (let j = start; j <= end; j++) {
    arr[j - 1] = copyArr[j - start];
  }
}
console.log(arr.join(" "));