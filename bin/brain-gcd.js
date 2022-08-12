import readlineSync from 'readline-sync';

import * as dialog from '../src/cli.js';

import { name } from '../src/cli.js';

console.log('Find the greatest common divisor of given numbers.');

const randomNumber1 = Math.floor(Math.random() * 20);
const randomNumber2 = Math.floor(Math.random() * 20);

console.log(`Question: ${randomNumber1} ${randomNumber2}`); 

const userResultString = readlineSync.question('Your answer: ');
    const userResult = Math.floor(userResultString);

const denominatorsOne = [];

for (let i = 0; i <= randomNumber1; i++) {
if (randomNumber1 % i === 0) {
    denominatorsOne.push(i);    
}
else {
    continue;
}
}

const denominatorsTwo = [];

for (let i = 0; i <= randomNumber2; i++) {
if (randomNumber2 % i === 0) {
    denominatorsTwo.push(i);    
}
else {
    continue;
}
}

let commonDenominators = [];

for (const denominator of denominatorsOne) {
    if (denominatorsTwo.includes(denominator)) {
        commonDenominators.push(denominator);
    }

    }

let result = commonDenominators[commonDenominators.length-1];

let goAhead = 0;

if (userResult === result) {
    console.log('Correct!')
    goAhead = 1;
}

else {
    console.log(`'${userResult}' is wrong answer ;(. Correct answer was '${result}'.\nLet\'s try again, ${name}!`);
   goAhead = 0;
}

if (goAhead === 1) {
    
}