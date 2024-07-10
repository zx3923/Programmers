const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const words = input.map((word) => {
  return parseInt(word.split("").reverse().join(""));
});
console.log(Math.max(words[0], words[1]));
