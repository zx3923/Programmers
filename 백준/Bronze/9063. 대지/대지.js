const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const time = Number(input[0]);

let [xMax, yMax] = input[1].split(" ").map(Number); // 첫 번째 좌표의 x, y 값으로 초기화
let xMin = xMax;
let yMin = yMax;

for (let i = 0; i < time; i++) {
  const [x, y] = input[i + 1].split(" ").map(Number);
  xMax = Math.max(xMax, x);
  xMin = Math.min(xMin, x);
  yMax = Math.max(yMax, y);
  yMin = Math.min(yMin, y);
}

console.log((xMax - xMin) * (yMax - yMin));