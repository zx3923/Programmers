const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const grades = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let total = 0;
let totalCredit = 0;
for (let i = 0; i < 20; i++) {
  const info = input[i].trim().split(" ");
  if (info[2] === "P") {
    continue;
  }
  total += parseFloat(info[1]) * grades[info[2]];
  totalCredit += parseFloat(info[1]);
}

console.log(total / totalCredit);
