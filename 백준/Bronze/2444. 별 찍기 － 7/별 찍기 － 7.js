const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = parseInt(input);
for (let i = 1; i <= num; i++) {
  console.log(`${" ".repeat(num - i)}${"*".repeat(i * 2 - 1)}`);
}
for (let i = num - 1; i > 0; i--) {
  console.log(`${" ".repeat(num - i)}${"*".repeat(i * 2 - 1)}`);
}
