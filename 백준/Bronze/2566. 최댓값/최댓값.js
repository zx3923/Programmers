const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 0; i < 9; i++) {
  const arr = input[i].split(" ").map(Number);
  result.push(arr);
}

let max = -Infinity;
let row = 0;
let col = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (result[i][j] > max) {
      max = result[i][j];
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max);
console.log(row, col);
