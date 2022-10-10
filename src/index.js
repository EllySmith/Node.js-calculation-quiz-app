import readlineSync from 'readline-sync';

const runGame = (introduction, gameMechanism) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    console.log(introduction);
    let game = [];
    game = gameMechanism(i);
    console.log(game[0]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === game[1].toString()) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[1]}'\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
