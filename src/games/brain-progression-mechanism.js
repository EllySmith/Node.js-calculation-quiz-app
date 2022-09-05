import readlineSync from 'readline-sync';

import * as dialog from './../cli.js';

import { name } from './../cli.js';

const fifthGame = () => {
  const fifthGameArr = [];

  const fifthGameIntroduction = 'What number is missing in the progression?';
  fifthGameArr.push(fifthGameIntroduction);

  const randomProgressionStep = Math.floor(Math.random() * 10 + 3);
  const randomProgression = [];
  let i = Math.floor(Math.random() * 6) + 1;
  randomProgression.push(i);
  let numberCount = 0;

  while (numberCount < 10) {
    i += randomProgressionStep;
    numberCount += 1;
    randomProgression.push(i);
  }
  const hiddenNumberIndex = Math.floor(Math.random() * randomProgression.length);
  const answer = randomProgression[hiddenNumberIndex];
  randomProgression[hiddenNumberIndex] = '..';

  let questionSequence = '';
  for (const number of randomProgression) {
    questionSequence += ` ${number}`;
  }
  const fifthGameQuestion = `Question: ${questionSequence}`;
  fifthGameArr.push(fifthGameQuestion);
  fifthGameArr.push(answer);

  return fifthGameArr;
};

let game = fifthGame(1);
console.log(game[0]);
console.log(game[1]);

const answer = readlineSync.question('Your answer: ');
if (answer === game[2].toString()) {
  console.log('Correct!');
  let game = fifthGame(2);
  console.log(game[1]);  
  const answer = readlineSync.question('Your answer: ');
    if (answer === game[2].toString()) {
      let game = fifthGame(2);
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


export { fifthGame };
