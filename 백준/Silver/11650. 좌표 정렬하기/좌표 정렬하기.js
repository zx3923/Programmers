const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const n = parseInt(input[0]);

const points = input.slice(1).map((line) => line.split(" ").map(Number));

points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

for (let i = 0; i < n; i++) {
  console.log(points[i].join(" "));
}