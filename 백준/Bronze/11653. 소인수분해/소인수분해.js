const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = parseInt(input);
let divisor = 2;

while (num >= 2) {
  if (num % divisor === 0) {
    num = num / divisor;
    console.log(divisor);
  } else {
    divisor++;
  }
}