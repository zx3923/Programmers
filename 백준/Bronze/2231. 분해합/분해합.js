const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N] = input[0].split(" ").map(Number);
let result = 0;

for (let i = 0; i < N; i++) {
  const num = i.toString().split("");
  const a = num.reduce((acc, cur) => acc + parseInt(cur), 0);
  if (a + i === N) {
    result = i;
    break;
  }
}

console.log(result);