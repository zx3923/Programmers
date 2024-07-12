const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const word = input.toUpperCase();
const reversed = word.split("").reverse().join("");
if (word === reversed) {
  console.log(1);
} else {
  console.log(0);
}
