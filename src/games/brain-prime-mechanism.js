import readlineSync from 'readline-sync';

const forthGameArr = () => {
  const array = [];
  const forthGameIntroduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  array.push(forthGameIntroduction);

  const randomNumber = Math.floor(Math.random() * 100);
  const forthGameQuestion = `Question: ${randomNumber}`;
  array.push(forthGameQuestion);

  let primeOrNot = 'no';
  for (let i = 2; i < randomNumber / 2; i += 1) {
    if (randomNumber === 2) {
      primeOrNot = 'yes';
      break;
    }
    if (randomNumber === 3) {
      primeOrNot = 'yes';
      break;
    }
    if (randomNumber % i === 0) {
      primeOrNot = 'no';
      break;
    }

    if (randomNumber % i !== 0) {
      primeOrNot = 'yes';
      i = i + 1;
    }
    primeOrNot = 'yes';
    break;
  }
  const forthGameAnswer = primeOrNot;
  array.push(forthGameAnswer);
  return array;
};

const forthGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 1; i <= 3; i += 1) {
    const game = forthGameArr(i);
    console.log(game[0]);
    console.log(game[1]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === game[2].toString()) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default forthGame;
