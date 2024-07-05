const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = Array.from({ length: 30 }, (value, i) => i + 1);
const studentNum = [];
for (let i = 0; i < 28; i++) {
  studentNum[i] = Number(input[i]);
}
const filtered = arr
  .filter((item) => !studentNum.includes(item))
  .sort((a, b) => a - b);
console.log(filtered[0] + "\n" + filtered[1]);