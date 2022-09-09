import readlineSync from 'readline-sync';

import * as dialog from './../cli.js';

import { name } from './../cli.js';

const secondGame = () => {
  const secondGameArr = [];

  const secondGameIntroduction = 'Answer "yes" if the number is even, otherwise answer "no".';
  secondGameArr.push(secondGameIntroduction);

  const randomNumber = Math.floor(Math.random() * 20);
  const secondGameQuestion = `Question: ${randomNumber}`;
  secondGameArr.push(secondGameQuestion);

  let isNumberEven;

  if (randomNumber % 2 === 0) {
    isNumberEven = 'yes';
  }
  else {
    (isNumberEven = 'no');
  }

  secondGameArr.push(isNumberEven);
  return secondGameArr;
};

let i;
for (let i = 1; i <= 3; i++) {
let game = secondGame(i);
console.log(game[0]);
console.log(game[1]);
const answer = readlineSync.question('Your answer: ');
if (answer === game[2].toString()) {
  console.log('Correct!');
}
else {
  console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
  process.exit();
};
}

console.log(`Congratulations, ${name}!`);


export { secondGame };
