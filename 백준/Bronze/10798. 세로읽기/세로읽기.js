const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let max = 0;
const arr = [];
const result = [];

for (let i = 0; i < 5; i++) {
  const line = input[i].trim();
  arr.push(line);
  if (line.length > max) {
    max = line.length;
  }
}

for (let i = 0; i < max; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    if (arr[j][i] !== undefined) {
      str += arr[j][i];
    }
  }
  result.push(str);
}

console.log(result.join(""));
