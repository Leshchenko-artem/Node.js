const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  const [n, i, j] = input.split(' ').map(Number);

  
  if (!Number.isInteger(n) || !Number.isInteger(i) || !Number.isInteger(j) || n <= 0 || i <= 0 || j <= 0) {
    console.log('error');
    rl.close();
    return;
  }

  const matrix = [];

  
  for (const k = 1; k <= n*n; k++) {
    matrix.push(k);
  }

  
  console.log(matrix[(i-1)*n + j-1]);

  rl.close();
});
