const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (value, i) => i + 1);
for (let i = 0; i < M; i++) {
  const [value1, value2] = input[i + 1].split(" ").map(Number);
  const changeValue1 = arr[value1 - 1];
  const changeValue2 = arr[value2 - 1];
  arr[value1 - 1] = changeValue2;
  arr[value2 - 1] = changeValue1;
}
console.log(arr.join(" "));