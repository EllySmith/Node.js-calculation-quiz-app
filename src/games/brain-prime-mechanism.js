import getRandomNumber from '../randomnumber.js';

import gameMechanism from '../index.js';

const forthGameArr = () => {
  const array = [];

  const randomNumber = getRandomNumber(1, 100);
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

const firstRound = forthGameArr(1);
const secondRound = forthGameArr(2);
const thirdRound = forthGameArr(3);
const questions = [firstRound[0], secondRound[0], thirdRound[0]];
const answers = [firstRound[1], secondRound[1], thirdRound[1]];

const forthGame = () => {
  gameMechanism('Answer "yes" if given number is prime. Otherwise answer "no".', questions, answers);
};
export default forthGame;
