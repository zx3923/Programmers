const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

const result = Math.pow(Math.pow(2, n) + 1, 2);
console.log(result);
