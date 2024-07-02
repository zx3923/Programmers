function solution(wallpaper) {
  const answer = [];
  let a = wallpaper.length;
  let b = 51;
  let c = 0;
  let d = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      if (a > i) {
        a = i;
      }
      if (c < i) {
        c = i;
      }
      if (b > wallpaper[i].indexOf("#")) {
        b = wallpaper[i].indexOf("#");
      }
      if (d < wallpaper[i].lastIndexOf("#")) {
        d = wallpaper[i].lastIndexOf("#");
      }
    }
  }
  answer[0] = a;
  answer[1] = b;
  answer[2] = c + 1;
  answer[3] = d + 1;

  return answer;
}