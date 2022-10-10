import readlineSync from 'readline-sync';

const runGame = (introduction, runGameMechanism) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    console.log(introduction);
    let gameData = [];
    gameData = runGameMechanism(i);
    console.log(gameData[0]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === gameData[1].toString()) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${gameData[1]}'\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
