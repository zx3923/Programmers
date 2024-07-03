const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const nums = input[i].split(" ");
    if (nums.length === 2) {
      result += (parseInt(nums[0]) + parseInt(nums[1])) + "\n";
    }
  }
  console.log(result.trim());
});