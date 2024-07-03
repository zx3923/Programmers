const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const result = "long ".repeat(a / 4) + "int";
console.log(result);