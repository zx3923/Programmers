function solution(players, callings) {
  const plIndex = {};
  const answer = players;
  players.map((name, i) => (plIndex[name] = i));

  callings.forEach((item) => {
    let index = plIndex[item];

    [answer[index - 1], answer[index]] = [answer[index], answer[index - 1]];
    plIndex[answer[index]] = index;
    plIndex[answer[index - 1]] = index - 1;
  });
  return answer
}