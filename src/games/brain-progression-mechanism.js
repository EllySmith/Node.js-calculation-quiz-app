import runGame from '../index.js';
import getRandomNumber from '../randomnumber.js';

const getQuestionAndAnswer = () => {
  const array = [];

  const randomProgressionStep = getRandomNumber(3, 10);
  const randomProgression = [];
  let i = getRandomNumber(1, 6);
  randomProgression.push(i);
  let numberCount = 0;

  while (numberCount < 10) {
    i += randomProgressionStep;
    numberCount += 1;
    randomProgression.push(i);
  }
  const hiddenNumberIndex = getRandomNumber(1, 10);
  const answer = randomProgression[hiddenNumberIndex];
  randomProgression[hiddenNumberIndex] = '..';

  let questionSequence = '';
  for (const number of randomProgression) {
    questionSequence += ` ${number}`;
  }
  const fifthGameQuestion = `Question:${questionSequence}`;
  array.push(fifthGameQuestion);
  array.push(answer);

  return array;
};

const runProgressionGame = () => {
  runGame('What number is missing in the progression?', getQuestionAndAnswer);
};

export default runProgressionGame;
