const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => a - b);

const [a, b, c] = input;

if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log(2 * (a + b) - 1);
}