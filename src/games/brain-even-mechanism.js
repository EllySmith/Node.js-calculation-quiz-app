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

let game = secondGame(1);
console.log(game[0]);
console.log(game[1]);

const answer = readlineSync.question('Your answer: ');
if (answer === game[2].toString()) {
  console.log('Correct!');
  let game = secondGame(2);
  console.log(game[1]);  
  const answer = readlineSync.question('Your answer: ');
    if (answer === game[2].toString()) {
      let game = secondGame(2);
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

export { secondGame };
