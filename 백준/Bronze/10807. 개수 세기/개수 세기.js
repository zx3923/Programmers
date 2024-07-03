const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const arr = input[1].trim().split(" ");
const target = input[2];
const filterd = arr.filter((item) => item === target);
console.log(filterd.length);