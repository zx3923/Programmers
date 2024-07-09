const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const text = input[0].trim();
console.log(text.charCodeAt());
