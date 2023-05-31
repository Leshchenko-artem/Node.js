const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (num) => {
  if (num < 0) {
    num = -num;
  }
  const digit1 = Math.floor(num / 100);
  const digit2 = Math.floor((num % 100) / 10);
  const digit3 = num % 10;

  console.log(digit1);
  console.log(digit2);
  console.log(digit3);

  rl.close();
});
