const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
while (input[i] !== "0 0") {
  const [A, B] = input[i].split(" ").map(Number);
  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
  i++;
}
