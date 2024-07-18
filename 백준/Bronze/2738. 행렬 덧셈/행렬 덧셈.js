const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

for (let i = 0; i < N; i++) {
  const result = [];
  const arr1 = input[i + 1]
    .trim()
    .split(" ")
    .map((item) => parseInt(item));
  const arr2 = input[i + 1 + N]
    .trim()
    .split(" ")
    .map((item) => parseInt(item));

  for (let j = 0; j < M; j++) {
    result.push(arr1[j] + arr2[j]);
  }
  console.log(result.join(" "));
}
