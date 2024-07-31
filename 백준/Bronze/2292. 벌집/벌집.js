const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
let lastNum = 1;
let result = 1;

while (n > lastNum) {
  lastNum = lastNum + 6 * result;
  result++;
}

console.log(result);
