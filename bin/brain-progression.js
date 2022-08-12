import readlineSync from 'readline-sync';

import * as dialog from '../src/cli.js';

import { name } from '../src/cli.js';

console.log('What number is missing in the progression?');



const randomProgressionStep = Math.floor(Math.random() * 10);

const randomProgression = [];

let i = Math.floor(Math.random() * 6) + 2;
randomProgression.push(i);

while (i<50) {
    i = i + randomProgressionStep;
    randomProgression.push(i);
}
const hiddenNumberIndex = Math.floor(Math.random() * randomProgression.length);
const answer = randomProgression[hiddenNumberIndex];
randomProgression[hiddenNumberIndex] = '..';

let questionSequence = '';
for (const number of randomProgression) {
    questionSequence = questionSequence + ` ${number}`;
}
console.log(`Question: ${questionSequence}`);

const userGuess = readlineSync.question('Your answer: ');

if (answer.toString() === userGuess) {
    console.log('Correct!');
}

if (answer.toString() !== userGuess) {
    console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${answer}'.\nLet\'s try again, ${name}!`);
}