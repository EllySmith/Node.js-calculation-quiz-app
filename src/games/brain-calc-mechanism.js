import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomNumber1 = getRandomNumber(0, 20);
  const randomNumber2 = getRandomNumber(0, 20);
  const randomOperatorIndex = getRandomNumber(1, 4);

  let randomOperator;
  switch (randomOperatorIndex) {
    case 1: randomOperator = '+';
      break;
    case 2: randomOperator = '-';
      break;
    case 3: randomOperator = '*';
      break;
    default:
      randomOperator = '+';
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
