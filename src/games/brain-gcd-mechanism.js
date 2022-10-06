import readlineSync from 'readline-sync';

const thirdGameArr = () => {
  const array = [];

  const thirdGameIntroduction = 'Find the greatest common divisor of given numbers.';
  array.push(thirdGameIntroduction);

  const randomNumber1 = Math.floor(Math.random() * 40 + 1);
  const randomNumber2 = Math.floor(Math.random() * 40 + 1);

  const thirdGameQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  array.push(thirdGameQuestion);

  const denominatorsOne = [];

  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      denominatorsOne.push(i);
    } else {
      i += 1;
    }
  }


  const denominatorsTwo = [];

  for (let i = 1; i <= randomNumber2; i += 1) {
    if (randomNumber2 % i === 0) {
      denominatorsTwo.push(i);
    } else {
      i += 1;
    }
  }


  const commonDenominators = [];

  for (const denominator of denominatorsOne) {
    if (denominatorsTwo.includes(denominator)) {
      commonDenominators.push(denominator);
    }
  }

  const thirdGameAnswer = commonDenominators[commonDenominators.length - 1];
  array.push(thirdGameAnswer);
  return array;
};

const thirdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 1; i <= 3; i += 1) {
    const game = thirdGameArr(i);
    console.log(game[0]);
    console.log(game[1]);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === game[2]) {
      console.log('Correct!');
    } else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
      process.exit();
    }

    console.log(`Congratulations, ${name}!`);
  }
};
export default thirdGame;
