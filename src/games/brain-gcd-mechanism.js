import runGame from '../index.js';
import getRandomNumber from '../randomnumber.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const thirdGameQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  array.push(thirdGameQuestion);

  const denominatorsOne = [];
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      denominatorsOne.push(i);
    }
  }

  const denominatorsTwo = [];
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber2 % i === 0) {
      denominatorsTwo.push(i);
    }
  }

  const commonDenominators = [];
  for (const value of denominatorsOne) {
    if (denominatorsTwo.includes(value)) commonDenominators.push(value);
  }

  const thirdGameAnswer = commonDenominators[commonDenominators.length - 1];
  array.push(thirdGameAnswer);
  return array;
};

const runGcdGame = () => {
  runGame('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
};

export default runGcdGame;
