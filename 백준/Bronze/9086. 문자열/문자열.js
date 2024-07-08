const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  const value = input[i].trim();
  const firstChar = value.charAt(0);
  const lastChar = value.charAt(value.length - 1);
  console.log(`${firstChar}${lastChar}`);
}