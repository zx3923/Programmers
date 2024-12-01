const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);

const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);
numbers.forEach(num => console.log(num));