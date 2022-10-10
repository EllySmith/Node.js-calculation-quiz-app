import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

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
  if (randomOperator === '+') {
    realResult = randomNumber1 + randomNumber2;
  }
  if (randomOperator === '-') {
    realResult = randomNumber1 - randomNumber2;
  }
  if (randomOperator === '*') {
    realResult = randomNumber1 * randomNumber2;
  }
  const rightAnswerOne = realResult;
  array.push(rightAnswerOne);

  return array;
};

const runCalcGame = () => {
  runGame('What is the result of the expression?', getQuestionAndAnswer);
};

export default runCalcGame;
