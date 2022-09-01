
import readlineSync from 'readline-sync';

import * as dialog from './cli.js';

import { name } from './cli.js';

import { firstGame } from './games/brain-calc-mechanism.js';

import { secondGame } from './games/brain-even-mechanism.js';

import { thirdGame } from './games/brain-gcd-mechanism.js';

import { forthGame } from './games/brain-prime-mechanism.js';

import { fifthGame } from './games/brain-progression-mechanism.js';

console.log('Please choose the game:\n1 - Random calculation\n2 - Guess even number\n3 - Find gretest common divisor\n4 - Guess prime number \n5 - Guess missing number');

const gameNumberAnswer = readlineSync.question('Your answer: ');
let gameNumber = Number(gameNumberAnswer);

let gameData;
let gameData2;
let gameData3;
const choiseVariants = [1, 2, 3, 4, 5];

if (!choiseVariants.includes(gameNumber)) {
  console.log('Please choose one of the numbers above.');
  const gameNumberAnswer = readlineSync.question('Your answer: ');
  gameNumber = Number(gameNumberAnswer);
  if (!choiseVariants.includes(gameNumber)) {
    console.log('I am afraid you can\'t count ;( Please learn numbers and get back to me! Bye!');
    process.exit();
  }
}

if (gameNumber === 1) {
  gameData = firstGame(1);
  gameData2 = firstGame(2);
  gameData3 = firstGame(3);
}

if (gameNumber === 2) {
  gameData = secondGame(1);
  gameData2 = secondGame(2);
  gameData3 = secondGame(3);
}
if (gameNumber === 3) {
  gameData = thirdGame(1);
  gameData2 = thirdGame(2);
  gameData3 = thirdGame(3);
}

if (gameNumber === 4) {
  gameData = forthGame(1);
  gameData2 = forthGame(2);
  gameData3 = forthGame(3);
}

if (gameNumber === 5) {
  gameData = fifthGame(1);
  gameData2 = fifthGame(2);
  gameData3 = fifthGame(3);
}

console.log(gameData[0]);
console.log(gameData[1]);
const answer1 = readlineSync.question('Your answer: ');
if (answer1 === gameData[2].toString()) {
  console.log('Correct!');
  console.log(gameData2[1]);
  const answer2 = readlineSync.question('Your answer: ');

  if (answer2 === gameData2[2].toString()) {
    console.log('Correct!');
    console.log(gameData3[1]);
    const answer3 = readlineSync.question('Your answer: ');

    if (answer3 === gameData3[2].toString()) {
      console.log(`Correct!\nCongratulations, ${name}!`);
    }


    else if (answer3 !== gameData3[2].toString()) {
      console.log(`Wrong!\n"${answer3}" is wrong answer ;(. Correct answer was '${gameData3[2].toString()}'`);
    }
  } else if (answer2 !== gameData2[2].toString()) {
    console.log(`Wrong!\n"${answer2}" is wrong answer ;(. Correct answer was '${gameData2[2].toString()}'`);
  }
} else if (answer1 !== gameData[2].toString()) {
  console.log(`Wrong!\n"${answer1}" is wrong answer ;(. Correct answer was '${gameData[2].toString()}'`);
}
