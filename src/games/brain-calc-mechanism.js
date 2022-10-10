import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomNumber1 = getRandomNumber(0, 20);
  const randomNumber2 = getRandomNumber(0, 20);
  const randomOperatorIndex = getRandomNumber(1, 4);

  let randomOperator;
  let realResult = 0;
  switch (randomOperatorIndex) {
    case 1: randomOperator = '+';
      realResult = randomNumber1 + randomNumber2;
      break;
    case 2: randomOperator = '-';
      realResult = randomNumber1 - randomNumber2;
      break;
    case 3: randomOperator = '*';
      realResult = randomNumber1 * randomNumber2;
      break;
    default:
      randomOperator = '+';
      realResult = 0;
  }

  const questionGameOne = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  array.push(questionGameOne);

  const rightAnswerOne = realResult;
  array.push(rightAnswerOne);

  return array;
};

const runCalcGame = () => {
  runGame('What is the result of the expression?', getQuestionAndAnswer);
};

export default runCalcGame;
