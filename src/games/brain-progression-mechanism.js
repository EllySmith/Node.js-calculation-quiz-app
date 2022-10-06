import readlineSync from 'readline-sync';

const fifthGameArr = () => {
  const array = [];

  const fifthGameIntroduction = 'What number is missing in the progression?';
  array.push(fifthGameIntroduction);

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
  const fifthGameQuestion = `Question:${questionSequence}`;
  array.push(fifthGameQuestion);
  array.push(answer);

  return array;
};

const fifthGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 1; i <= 3; i += 1) {
    const game = fifthGameArr(i);
    console.log(game[0]);
    console.log(game[1]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === game[2].toString()) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
      process.exit();
    }

    console.log(`Congratulations, ${name}!`);
  }
};
export default fifthGame;
