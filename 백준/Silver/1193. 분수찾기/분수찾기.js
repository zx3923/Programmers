const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const X = parseInt(input);
let line = 1;
let sum = 0;

// 몇 번째 대각선인지 찾기
while (sum + line < X) {
  sum += line;
  line++;
}

// 대각선 내 위치
//ex) X 가 14 일 때  14 - (이 전 대각선들의 합) = 4 => 5번째 대각선에서 4번째 위치
const index = X - sum;

// 대각선이 홀수인지 짝수인지에 따라 분자 분모의 증감
if (line % 2 == 0) {
  console.log(`${index}/${line - index + 1}`);
} else {
  console.log(`${line - index + 1}/${index}`);
}
