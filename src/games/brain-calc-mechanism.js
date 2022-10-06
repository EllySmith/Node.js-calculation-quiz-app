import readlineSync from 'readline-sync';

import * as dialog from './../cli.js';

import { name } from './../cli.js';

const firstGameArr = () => {
  let array = [];

  const firstGameIntroduction = 'What is the result of the expression?';
  array.push(firstGameIntroduction);
  const randomNumber1 = Math.floor(Math.random() * 20);
  const randomNumber2 = Math.floor(Math.random() * 20);

  const randomOperatorIndex = Math.floor(Math.random() * 3);
  let randomOperator;
  if (randomOperatorIndex >= 0 && randomOperatorIndex < 1) {
    randomOperator = '+';
  }

  if (randomOperatorIndex >= 1 && randomOperatorIndex < 2) {
    randomOperator = '-';
  }

  if (randomOperatorIndex >= 2 && randomOperatorIndex <= 3) {
    randomOperator = '*';
  }

  const questionGameOne = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  array.push(questionGameOne);
  let realResult = 0;

  if (randomOperatorIndex >= 0 && randomOperatorIndex < 1) {
    realResult = randomNumber1 + randomNumber2;
  }

  if (randomOperatorIndex >= 1 && randomOperatorIndex < 2) {
    realResult = randomNumber1 - randomNumber2;
  }

  if (randomOperatorIndex >= 2 && randomOperatorIndex <= 3) {
    realResult = randomNumber1 * randomNumber2;
  }
  const rightAnswerOne = realResult;
  array.push(rightAnswerOne);
  return array;
};


export const firstGame = () => {
let i;
for (let i = 1; i <= 3; i++) {
let game = firstGameArr(i);
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