import readlineSync from 'readline-sync';

import * as dialog from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = Math.floor(Math.random()* 20);

console.log('Question: ' + randomNumber);

const isEven = readlineSync.question('Your answer: ');

let isNumberEven;
let goAhead;
import { name } from '../src/cli.js';

if (randomNumber % 2 === 0) {
  isNumberEven = 'yes';
}
else {
  (isNumberEven = 'no');
}

if (isNumberEven === isEven) {
  console.log('Correct!')
  goAhead = 1;  
}

else {
  console.log(`'${isEven}' is wrong answer ;(. Correct answer was '${isNumberEven}'.\nLet\'s try again, ${name}!`);
  goAhead = 0;  
}

if (goAhead === 1) {
  const randomNumber2 = Math.floor(Math.random()* 20);
  console.log('Question: ' + randomNumber2);

const isEven2 = readlineSync.question('Your answer: ');

let isNumberEven2;

if (randomNumber2 % 2 === 0) {
  isNumberEven2 = 'yes';
}
else {
  (isNumberEven2 = 'no');
}

if (isNumberEven2 === isEven2) {
  console.log('Correct!');
  goAhead = 1;  
}

else {
  console.log(`'${isEven2}' is wrong answer ;(. Correct answer was '${isNumberEven2}'.\nLet\'s try again, ${name}!`);
  goAhead = 0;  
}
}
if (goAhead === 1) {
  const randomNumber3 = Math.floor(Math.random()* 20);
  console.log('Question: ' + randomNumber3);

const isEven3 = readlineSync.question('Your answer: ');

let isNumberEven3;

if (randomNumber3 % 2 === 0) {
  isNumberEven3 = 'yes';
}
else {
  (isNumberEven3 = 'no');
}

if (isNumberEven3 === isEven3) {
  console.log(`Correct!\nCongratulations, ${name}!`);  
}

else {
  console.log(`'${isEven3}' is wrong answer ;(. Correct answer was '${isNumberEven3}'.\nLet\'s try again, ${name}!`);  
}
}