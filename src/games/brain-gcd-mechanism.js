import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRoundData = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `Question: ${randomNumber1} ${randomNumber2}`;

  const getDenominators = (x) => {
    const denominators = [];
    for (let i = 1; i <= x; i += 1) {
      if (x % i === 0) {
        denominators.push(i);
      }
    }
    return denominators;
  };
  const denominatorsOne = getDenominators(randomNumber1);
  const denominatorsTwo = getDenominators(randomNumber2);

  const commonDenominators = [];
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (denominatorsTwo.includes(i) && denominatorsOne.includes(i)) {
      commonDenominators.push(i);
    }
  }
  const realAnswer = commonDenominators[commonDenominators.length - 1];

  return [question, realAnswer];
};

const runGcdGame = () => {
  runGame('Find the greatest common divisor of given numbers.', getRoundData);
};

export default runGcdGame;
