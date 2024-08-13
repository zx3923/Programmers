const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input.map(Number);

console.log(A * B);
