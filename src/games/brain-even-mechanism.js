import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;
const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;

  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startEvenGame = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', getRoundData);
};

export default startEvenGame;
