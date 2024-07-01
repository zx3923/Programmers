function solution(name, yearning, photo) {
  let answer = [];
  const idx = {};
  yearning.forEach((score, i) => {
    idx[name[i]] = score;
  });
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let name of photo[i]) {
      if (idx[name] === undefined) {
        continue;
      } else {
        score += idx[name];
      }
    }
    answer[i] = score;
  }
  return answer;
}