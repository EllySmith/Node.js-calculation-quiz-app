/* eslint-disable no-console */
import readlineSync from 'readline-sync';

import getRandomNumber from '../randomnumber.js';

import gameMechanism from '../index.js';

const secondGameArr = () => {
  const array = [];

  const randomNumber = getRandomNumber(0, 20);
  const secondGameQuestion = `Question: ${randomNumber}`;
  array.push(secondGameQuestion);

  let isNumberEven;

  if (randomNumber % 2 === 0) {
    isNumberEven = 'yes';
  } else {
    (isNumberEven = 'no');
  }

  array.push(isNumberEven);
  return array;
};

const firstRound = secondGameArr(1);
const secondRound = secondGameArr(2);
const thirdRound = secondGameArr(3);
const questions = [firstRound[0], secondRound[0], thirdRound[0]];
const answers = [firstRound[1], secondRound[1], thirdRound[1]];

const secondGame = () => {
  gameMechanism('Answer "yes" if the number is even, otherwise answer "no".', questions, answers);
};


export default secondGame;
