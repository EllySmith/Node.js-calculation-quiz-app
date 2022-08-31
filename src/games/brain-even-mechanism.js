

const secondGame = () => {
  let secondGameArr = [];

const secondGameIntroduction = 'Answer "yes" if the number is even, otherwise answer "no".';
secondGameArr.push(secondGameIntroduction);

const randomNumber = Math.floor(Math.random()* 20);
const secondGameQuestion = `Question: ${randomNumber}`;
secondGameArr.push(secondGameQuestion);


let isNumberEven;

if (randomNumber % 2 === 0) {
  isNumberEven = 'yes';
}
else {
  (isNumberEven = 'no');
}

secondGameArr.push(isNumberEven);
return secondGameArr;
}



export { secondGame };