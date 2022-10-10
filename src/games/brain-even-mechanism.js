/* eslint-disable no-console */
import getRandomNumber from '../randomnumber.js';

import runGame from '../index.js';

const getQuestionAndAnswer = () => {
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

const runEvenGame = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
};

export default runEvenGame;
