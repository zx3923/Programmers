const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const users = input.slice(1);

const sortedUsers = users.map((user, index) => {
  const [age, name] = user.split(" ");
  return { age: parseInt(age), name, index };
});

sortedUsers.sort((a, b) => a.age - b.age || a.index - b.index);

console.log(sortedUsers.map((user) => `${user.age} ${user.name}`).join("\n"));