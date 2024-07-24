const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const num = input[0];
const change = parseInt(input[1], 10);

const result = parseInt(num, change);

console.log(result);
