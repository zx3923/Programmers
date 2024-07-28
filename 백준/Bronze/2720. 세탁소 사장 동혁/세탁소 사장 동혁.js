const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const num = parseInt(input[0]);

const coinValues = [25, 10, 5, 1];
const results = [];

for (let i = 0; i < num; i++) {
  let money = parseInt(input[i + 1]);
  const result = coinValues.map((coin) => {
    const count = Math.floor(money / coin);
    money = money % coin;
    return count;
  });
  results.push(result.join(" "));
}
console.log(results.join("\n"));
