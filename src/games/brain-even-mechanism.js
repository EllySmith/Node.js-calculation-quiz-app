/* eslint-disable no-console */
import getRandomNumber from '../randomNumber.js';

import runGame from '../index.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomNumber = getRandomNumber();
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
