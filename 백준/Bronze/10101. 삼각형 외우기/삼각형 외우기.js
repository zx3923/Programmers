const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if (a + b + c === 180) {
  // 60도일때
  if (a === 60 && b === 60 && c === 60) {
    console.log("Equilateral");
  }
  // 두각이같을때
  else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  }
  // 모두다를때
  else {
    console.log("Scalene");
  }
}
// 180도가아닐때
else {
  console.log("Error");
}