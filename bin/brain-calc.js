import readlineSync from 'readline-sync';

import * as dialog from './../cli.js';

import { name } from './../cli.js';

const firstGame = () => {
  let firstGameArr = [];

  const firstGameIntroduction = 'What is the result of the expression?';
  firstGameArr.push(firstGameIntroduction);
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
  firstGameArr.push(questionGameOne);
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
  firstGameArr.push(rightAnswerOne);
  return firstGameArr;
};
let game = firstGame(1);
console.log(game[0]);
console.log(game[1]);

const answer = readlineSync.question('Your answer: ');
if (answer === game[2].toString()) {
  console.log('Correct!');
  let game = firstGame(2);
  console.log(game[1]);  
  const answer = readlineSync.question('Your answer: ');
    if (answer === game[2].toString()) {
      let game = firstGame(2);
      console.log(game[1]);  
      const answer = readlineSync.question('Your answer: ');
      if (answer === game[2].toString()) {
      console.log(`Correct!\nCongratulations, ${name}!`);
      }
      else {
        console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
        
      }
    }
    else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
      
    }
  }
  else {
    console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
    }

export { firstGame };
