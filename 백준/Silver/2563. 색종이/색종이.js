const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 100 x 100 도화지
const canvas = Array.from(new Array(100), () => new Array(100).fill(0));

// 색종이 수
const time = Number(input[0]);

// x,y 값으로 색종이 부분은 1 로 채우기
for (let i = 0; i < time; i++) {
  const [x, y] = input[i + 1].split(" ").map((i) => Number(i));
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      canvas[y + j][x + k] = 1;
    }
  }
}

// 1인 부분으로 면적 계산
let result = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (canvas[i][j] === 1) {
      result++;
    }
  }
}

console.log(result);
