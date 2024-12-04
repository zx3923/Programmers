const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const average = input.reduce((acc, cur) => acc + cur) / 5;
console.log(average);

const center = input.sort()[2];
console.log(center);