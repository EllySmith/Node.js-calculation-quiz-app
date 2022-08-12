import readlineSync from 'readline-sync';

import * as dialog from '../src/cli.js';

import { name } from '../src/cli.js';


console.log('What is the result of the expression?');

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

    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`); 


    const userResultString = readlineSync.question('Your answer: ');
    const userResult = Math.floor(userResultString);


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

let goAhead;
if (realResult === userResult) {
    console.log('Correct!')
    goAhead = 1;
}

else {
    console.log(`'${userResult}' is wrong answer ;(. Correct answer was '${realResult}'.\nLet\'s try again, ${name}!`);
   goAhead = 0;
}

if (goAhead === 1) {
    console.log('What is the result of the expression?');

const randomNumber11 = Math.floor(Math.random() * 20);
const randomNumber12 = Math.floor(Math.random() * 20);

const randomOperatorIndex2 = Math.floor(Math.random() * 3);
let randomOperator2;

if (randomOperatorIndex2 >= 0 && randomOperatorIndex2 < 1) {
    randomOperator2 = '+';
    }

if (randomOperatorIndex2 >= 1 && randomOperatorIndex2 < 2) {
    randomOperator2 = '-';
    }

if (randomOperatorIndex2 >= 2 && randomOperatorIndex2 <= 3) {
    randomOperator2 = '*';
    }

    console.log(`Question: ${randomNumber11} ${randomOperator2} ${randomNumber12}`); 


    const userResultString2 = readlineSync.question('Your answer: ');
    const userResult2 = Math.floor(userResultString2);


let realResult2 = 0; 

    if (randomOperatorIndex2 >= 0 && randomOperatorIndex2 < 1) {
        realResult2 = randomNumber11 + randomNumber12;
        }
    
    if (randomOperatorIndex2 >= 1 && randomOperatorIndex2 < 2) {
        realResult2 = randomNumber11 - randomNumber12;
        }
    
    if (randomOperatorIndex2 >= 2 && randomOperatorIndex2 <= 3) {
        realResult2 = randomNumber11 * randomNumber12;
        }

let goAhead;
if (realResult2 === userResult2) {
    console.log('Correct!')
    goAhead = 1;
}

else {
    console.log(`'${userResult2}' is wrong answer ;(. Correct answer was '${realResult2}'.\nLet\'s try again, ${name}!`);
   goAhead = 0;
}
}

if (goAhead === 1) {
    console.log('What is the result of the expression?');

const randomNumber21 = Math.floor(Math.random() * 20);
const randomNumber22 = Math.floor(Math.random() * 20);

const randomOperatorIndex3 = Math.floor(Math.random() * 3);
let randomOperator3;

if (randomOperatorIndex3 >= 0 && randomOperatorIndex3 < 1) {
    randomOperator3 = '+';
    }

if (randomOperatorIndex3 >= 1 && randomOperatorIndex3 < 2) {
    randomOperator3 = '-';
    }

if (randomOperatorIndex3 >= 2 && randomOperatorIndex3 <= 3) {
    randomOperator3 = '*';
    }

    console.log(`Question: ${randomNumber21} ${randomOperator3} ${randomNumber22}`); 


    const userResultString3 = readlineSync.question('Your answer: ');
    const userResult3 = Math.floor(userResultString3);


let realResult3 = 0; 

    if (randomOperatorIndex3 >= 0 && randomOperatorIndex3 < 1) {
        realResult3 = randomNumber21 + randomNumber22;
        }
    
    if (randomOperatorIndex3 >= 1 && randomOperatorIndex3 < 2) {
        realResult3 = randomNumber21 - randomNumber22;
        }
    
    if (randomOperatorIndex3 >= 2 && randomOperatorIndex3 <= 3) {
        realResult3 = randomNumber21 * randomNumber22;
        }

let goAhead;
if (realResult3 === userResult3) {
    console.log(`Correct!\nCongratulations, ${name}!`);
    goAhead = 1;
}

else {
    console.log(`'${userResult3}' is wrong answer ;(. Correct answer was '${realResult3}'.\nLet\'s try again, ${name}!`);
   goAhead = 0;
}
}