import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;

  const isEven = (num) => num % 2 === 0;
  let rightAnswer;
  if (isEven(randomNumber)) {
    rightAnswer = 'yes';
  } else if (!isEven(randomNumber)) {
    rightAnswer = 'no';
  }

  return [question, rightAnswer];
};

const runEvenGame = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', getRoundData);
};

export default runEvenGame;
