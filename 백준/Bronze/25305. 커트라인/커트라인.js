const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const score = input[1].split(" ").map(Number);
score.sort((a, b) => b - a);
console.log(score[K - 1]);