const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = input[0];
const M = Number(input[1]);
console.log(N[M - 1]);