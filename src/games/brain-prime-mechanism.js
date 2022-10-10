import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomNumber = getRandomNumber();
  const forthGameQuestion = `Question: ${randomNumber}`;
  array.push(forthGameQuestion);

  let primeOrNot = 'yes';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      primeOrNot = 'no';
      break;
    }
  }

  const forthGameAnswer = primeOrNot;
  array.push(forthGameAnswer);
  return array;
};

const runPrimeGame = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer);
};

export default runPrimeGame;
