const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const points = input.map((i) => i.split(" ").map(Number));

const xPoint = points.map((p) => p[0]);
const yPoint = points.map((p) => p[1]);

const x = xPoint.find((x) => xPoint.indexOf(x) === xPoint.lastIndexOf(x));
const y = yPoint.find((y) => yPoint.indexOf(y) === yPoint.lastIndexOf(y));

console.log(`${x} ${y}`);