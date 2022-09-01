const forthGame = () => {
  let forthGameArr = [];

  const forthGameIntroduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  forthGameArr.push(forthGameIntroduction);

  const randomNumber = Math.floor(Math.random() * 100);
  const forthGameQuestion = `Question ${randomNumber}`;
  forthGameArr.push(forthGameQuestion);

  let primeOrNot = 'no';
  for (let i = 2; i < randomNumber / 2; i++) {
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
      continue;
    }
    primeOrNot = 'yes';
    break;
  }
  forthGameArr.push(primeOrNot);
  return forthGameArr;
};

export { forthGame };
