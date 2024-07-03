const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const a = parseInt(input[0]);
let result = "";
for (let i = 0; i < a; i++) {
  const num = input[i + 1].split(" ");
  result += parseInt(num[0]) + parseInt(num[1]) + "\n";
}

console.log(result);