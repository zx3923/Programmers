const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  const max = Math.max(a, b, c);
  const check = a + b + c - max;

  if (check <= max) {
    console.log("Invalid");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}