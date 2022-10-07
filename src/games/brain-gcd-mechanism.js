import getRandomNumber from '../randomnumber.js';

import gameMechanism from '../index.js';

const thirdGameArr = () => {
  const array = [];

  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

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

const firstRound = thirdGameArr(1);
const secondRound = thirdGameArr(2);
const thirdRound = thirdGameArr(3);
const questions = [firstRound[0], secondRound[0], thirdRound[0]];
const answers = [firstRound[1], secondRound[1], thirdRound[1]];

const thirdGame = () => {
  gameMechanism('Find the greatest common divisor of given numbers.', questions, answers);
};

export default thirdGame;
