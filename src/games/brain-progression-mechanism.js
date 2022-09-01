const fifthGame = () => {
  const fifthGameArr = [];

  const fifthGameIntroduction = 'What number is missing in the progression?';
  fifthGameArr.push(fifthGameIntroduction);

  const randomProgressionStep = Math.floor(Math.random() * 10 + 3);
  const randomProgression = [];
  let i = Math.floor(Math.random() * 6) + 1;
  randomProgression.push(i);
  let numberCount = 0;

  while (numberCount < 10) {
    i += randomProgressionStep;
    numberCount += 1;
    randomProgression.push(i);
  }
  const hiddenNumberIndex = Math.floor(Math.random() * randomProgression.length);
  const answer = randomProgression[hiddenNumberIndex];
  randomProgression[hiddenNumberIndex] = '..';

  let questionSequence = '';
  for (const number of randomProgression) {
    questionSequence += ` ${number}`;
  }
  const fifthGameQuestion = `Question: ${questionSequence}`;
  fifthGameArr.push(fifthGameQuestion);
  fifthGameArr.push(answer);

  return fifthGameArr;
};

export { fifthGame };
