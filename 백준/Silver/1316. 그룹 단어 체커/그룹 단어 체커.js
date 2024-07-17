const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const set = new Set();
let count = 0;
const time = parseInt(input[0]);
for (let i = 1; i <= time; i++) {
  const word = input[i].trim();
  let check = true;
  for (let idx = 0; idx < word.length; idx++) {
    if (set.has(word[idx])) {
      if (word[idx - 1] !== word[idx]) {
        // 연속이 아니라면 루프 종료
        check = false;
        break;
      }
    } else {
      set.add(word[idx]);
    }
  }
  if (check) {
    count++;
  }
  set.clear();
}

console.log(count);
