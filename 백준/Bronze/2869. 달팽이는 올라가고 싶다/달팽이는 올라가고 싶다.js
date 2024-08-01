const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, V] = input.map((item) => parseInt(item));
const days = Math.ceil((V - A) / (A - B)) + 1;
console.log(days);
