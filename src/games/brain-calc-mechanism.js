import getRandomNumber from '../randomnumber.js';

import gameMechanism from '../index.js';

const firstGameArr = () => {
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

const firstRound = firstGameArr(1);
const secondRound = firstGameArr(2);
const thirdRound = firstGameArr(3);
const questions = [firstRound[0], secondRound[0], thirdRound[0]];
const answers = [firstRound[1], secondRound[1], thirdRound[1]];

const firstGame = () => {
  gameMechanism('What is the result of the expression?', questions, answers);
};

export default firstGame;
