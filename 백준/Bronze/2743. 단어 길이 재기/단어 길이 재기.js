const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
console.log(input[0].length);
