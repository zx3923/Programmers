const fs = require("fs");
// 한 줄에 공백으로 들어올 때
const input = fs.readFileSync("/dev/stdin").toString();

const x = Number(input);

console.log(x * 4);