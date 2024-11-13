const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

const result = (n * (n - 1)) / 2;

console.log(result);
console.log(2);