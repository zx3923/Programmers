const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const words = input.slice(1);

const sortedWords = Array.from(new Set(words));

sortedWords.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(sortedWords.join("\n"));