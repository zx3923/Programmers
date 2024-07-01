function solution(bandage, health, attacks) {
   const maxTime = attacks[attacks.length - 1][0] + 1;
  let lastHealth = health;
  let healTime = 0;
  let attackTime = 0;
  for (let i = 0; i < maxTime; i++) {
    if (attackTime < attacks.length && attacks[attackTime][0] === i) {
      lastHealth -= attacks[attackTime][1];
        if (lastHealth <= 0) {
        return -1;
      }
      healTime = 0;
      attackTime++;
    } else {
      lastHealth += bandage[1];
      healTime++;
      if (bandage[0] === healTime) {
        lastHealth += bandage[2];
        healTime = 0;
      }
      if (lastHealth > health) {
        lastHealth = health;
      }
    }
  }
    return lastHealth
}