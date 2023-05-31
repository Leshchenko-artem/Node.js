const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  const [a, b, n] = input.split(' ').map(Number);

  const total = (a * 100 + b) * n;
  const grn = Math.floor(total / 100);
  const kop = total % 100;

  console.log(`${grn} ${kop}`);
  rl.close();
});
