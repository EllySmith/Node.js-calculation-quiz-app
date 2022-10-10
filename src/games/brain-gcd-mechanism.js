import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRoundData = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `Question: ${randomNumber1} ${randomNumber2}`;

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };

  const realAnswer = gcd(randomNumber1, randomNumber2);

  return [question, realAnswer];
};

const runGcdGame = () => {
  runGame('Find the greatest common divisor of given numbers.', getRoundData);
};

export default runGcdGame;
