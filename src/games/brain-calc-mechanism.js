import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const calculate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+': return numberOne + numberTwo;
    case '-': return numberOne - numberTwo;
    case '*': return numberOne * numberTwo;
    default:
      console.log('Error: wrong input.');
  }
}; // Вынесла, но получилась ошибка в тестах

const getRoundData = () => {
  const randomNumberOne = getRandomNumber(0, 20);
  const randomNumberTwo = getRandomNumber(0, 20);
  const randomOperatorIndex = getRandomNumber(0, 3);

  const operators = ['+', '-', '*'];
  const question = `Question: ${randomNumberOne} ${operators[randomOperatorIndex]} ${randomNumberTwo}`;
  const rightAnswer = calculate(randomNumberOne, randomNumberTwo, operators[randomOperatorIndex]);

  return [question, rightAnswer];
};

const startCalcGame = () => {
  startGame('What is the result of the expression?', getRoundData);
};

export default startCalcGame;
