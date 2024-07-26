const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const N = parseInt(input[0]);
const B = parseInt(input[1]);


function convert(N, B) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let number = N;

  while (number > 0) {
    const remainder = number % B;
    result = chars[remainder] + result;
    number = Math.floor(number / B);
  }

  return result;
}

console.log(convert(N, B));
