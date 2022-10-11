import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const findGreatestDenominator = (numberOne, numberTwo) => {
  if (!numberTwo) {
    return numberOne;
  }
  return findGreatestDenominator(numberTwo, numberOne % numberTwo);
};

const getRoundData = () => {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();
  const question = `Question: ${randomNumberOne} ${randomNumberTwo}`;

  const realAnswer = findGreatestDenominator(randomNumberOne, randomNumberTwo);

  return [question, realAnswer];
};

const startGcdGame = () => {
  startGame('Find the greatest common divisor of given numbers.', getRoundData);
};

export default startGcdGame;
