import readlineSync from 'readline-sync';

const runGame = (introduction, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const roundsCount = 3;
  console.log(introduction);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, realAnswer] = getRoundData();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === realAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${realAnswer}'\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
