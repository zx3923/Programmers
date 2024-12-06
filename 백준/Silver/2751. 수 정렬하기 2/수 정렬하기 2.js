const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));