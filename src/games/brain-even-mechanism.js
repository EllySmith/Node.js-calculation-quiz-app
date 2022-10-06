import readlineSync from 'readline-sync';

import * as dialog from './../cli.js';

import { name } from './../cli.js';

const secondGameArr = () => {
  const array = [];

  const secondGameIntroduction = 'Answer "yes" if the number is even, otherwise answer "no".';
  array.push(secondGameIntroduction);

  const randomNumber = Math.floor(Math.random() * 20);
  const secondGameQuestion = `Question: ${randomNumber}`;
  array.push(secondGameQuestion);

  let isNumberEven;

  if (randomNumber % 2 === 0) {
    isNumberEven = 'yes';
  }
  else {
    (isNumberEven = 'no');
  }

  array.push(isNumberEven);
  return array;
};

export const secondGame = () => {
let i;
for (let i = 1; i <= 3; i++) {
let game = secondGameArr(i);
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
}
console.log(`Congratulations, ${name}!`);

