import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRoundData = () => {
  const randomNumber1 = getRandomNumber(0, 20);
  const randomNumber2 = getRandomNumber(0, 20);
<<<<<<< HEAD
  const randomOperatorIndex = getRandomNumber(0, 2);
=======
  const randomOperatorIndex = getRandomNumber(0, );
>>>>>>> 8760459914d2fdac77ec204f8e14d599cdfb0103

  const operators = ['+', '-', '*'];

  const calculate = (number1, number2, operator) => {
    switch (operator) {
      case '+': return number1 + number2;
      case '-': return number1 - number2;
      case '*': return number1 * number2;
      default:
        return 0;
    }
  };
  const question = `Question: ${randomNumber1} ${operators[randomOperatorIndex]} ${randomNumber2}`;
  const rightAnswer = calculate(randomNumber1, randomNumber2, operators[randomOperatorIndex]);

  return [question, rightAnswer];
};

const runCalcGame = () => {
  runGame('What is the result of the expression?', getRoundData);
};

export default runCalcGame;
