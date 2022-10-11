import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = (start, lenght, step) => {
  const progression = [start];
  let result = start;
  for (let i = 0; i < lenght; i += 1) {
    result += step;
    progression.push(result);
  }
  return progression;
};

const getRoundData = () => {
  const progressionStep = getRandomNumber(3, 10);
  const progressionStart = getRandomNumber(1, 6);
  const progressionLength = 10;

  const randomProgression = getProgression(progressionStart, progressionLength, progressionStep);
  const hiddenNumberIndex = getRandomNumber(1, 10);
  const realAnswer = randomProgression[hiddenNumberIndex];

  randomProgression[hiddenNumberIndex] = '..';
  const question = `Question: ${randomProgression.join(' ')}`;

  return [question, realAnswer];
};

const startProgressionGame = () => {
  runGame('What number is missing in the progression?', getRoundData);
};

export default startProgressionGame;
