import getRandomNumber from '../randomnumber.js';

import runGame from '../index.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomNumber1 = getRandomNumber(0, 20);
  const randomNumber2 = getRandomNumber(0, 20);

  const randomOperatorIndex = getRandomNumber(0, 3);
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

  const questionGameOne = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  array.push(questionGameOne);
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
  const rightAnswerOne = realResult;
  array.push(rightAnswerOne);
  return array;
};

const runFirstGame = () => {
  runGame('What is the result of the expression?', getQuestionAndAnswer);
};

export default runFirstGame;
