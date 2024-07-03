const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");
const arr = new Array(Number(N)).fill(0);
for (let i = 0; i < Number(M); i++) {
  const [start, end, value] = input[i + 1].split(" ");
  arr.fill(Number(value), Number(start) - 1, Number(end));
}
console.log(arr.join(" "));