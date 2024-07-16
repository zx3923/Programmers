const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;

for (let i = 0; i < input.length; i++) {
  let word = input[i] + input[i + 1];
  if (word === "dz" && input[i + 2] === "=") {
    // 알파벳이 dz면 dz= 까지 확인
    word += input[i + 2];
  }

  if (croatia.includes(word)) {
    count++;
    i += word.length - 1; // 크로아티아 알파벳의 길이만큼 인덱스를 이동
  } else {
    count++;
  }
}

console.log(count);
