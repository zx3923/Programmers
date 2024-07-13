const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("")
  .sort();
let count = 1;
const obj = {};
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1]) {
    count++;
  } else {
    obj[input[i]] = count;
    count = 1;
  }
}
let max = 0;
let maxKey = "";
let sameMax = false;

for (const char in obj) {
  if (obj[char] > max) {
    max = obj[char];
    maxKey = char;
    sameMax = false;
  } else if (max === obj[char]) {
    sameMax = true;
  }
}

if (sameMax) {
  console.log("?");
} else {
  console.log(maxKey);
}
