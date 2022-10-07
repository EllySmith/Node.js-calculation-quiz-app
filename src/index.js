import readlineSync from 'readline-sync';

const gameMechanism = (introduction, questions, answers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    console.log(introduction);
    console.log(questions[i]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answers[i].toString()) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${answers[i]}'\nLet's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameMechanism;
