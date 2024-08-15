const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [x, y, w, h] = input.map(Number);

const left = x;
const right = w - x;
const top = h - y;
const bottom = y;

const min = Math.min(left, right, top, bottom);

console.log(min);
