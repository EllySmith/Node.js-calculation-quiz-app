import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gcd = (numberOne, numberTwo) => {
  if (!numberTwo) {
    return numberOne;
  }
  return gcd(numberTwo, numberOne % numberTwo);
};

const getRoundData = () => {
  const getNumberOne = getRandomNumber();
  const getNumberTwo = getRandomNumber();
  const question = `Question: ${getNumberOne} ${getNumberTwo}`;

  const realAnswer = gcd(getNumberOne, getNumberTwo);

  return [question, realAnswer];
};

const startGcdGame = () => {
  startGame('Find the greatest common divisor of given numbers.', getRoundData);
};

export default startGcdGame;
