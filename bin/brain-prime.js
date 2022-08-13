import readlineSync from 'readline-sync';

import * as dialog from '../src/cli.js';

import { name } from '../src/cli.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const randomNumber = Math.floor(Math.random() * 10000);

console.log(`Question ${randomNumber}`);


let primeOrNot = 'no';

for (let i = 2; i < randomNumber/2 ; i++) {
    if (randomNumber === 2) {
        primeOrNot = 'yes';
        break;
    }
    if (randomNumber === 3) {
        primeOrNot = 'yes';
        break;
    }
    if (randomNumber % i === 0) {
        primeOrNot = 'no';
        break;
    }

    if (randomNumber % i !== 0) {
        primeOrNot = 'yes';
        continue;        
    }
    primeOrNot = 'yes';
    break;
    
}

const userGuess = readlineSync.question('Your answer: ');

if (userGuess === primeOrNot) {
    console.log('Correct!');
}

if (userGuess !== primeOrNot) {
    console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${primeOrNot}'.\nLet\'s try again, ${name}!`);
}
