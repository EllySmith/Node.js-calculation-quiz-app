import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;

  let primeOrNot = 'yes';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      primeOrNot = 'no';
      break;
    }
  }
  const realAnswer = primeOrNot;
  return [question, realAnswer];
};

const runPrimeGame = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRoundData);
};

export default runPrimeGame;
