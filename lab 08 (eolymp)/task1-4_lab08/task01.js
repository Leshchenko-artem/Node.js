const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('', (number) => {

  if (number >= 10 && number <= 99) {
  
    const digits = number.split('');
    console.log(digits.join(' '));
  } else {
    console.log('');
  }


  rl.close();
});
