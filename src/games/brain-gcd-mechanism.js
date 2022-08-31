const thirdGame = () => {
    let thirdGameArr = [];

    const thirdGameIntroduction = 'Find the greatest common divisor of given numbers.';
    thirdGameArr.push(thirdGameIntroduction);


const randomNumber1 = Math.floor(Math.random() * 20);
const randomNumber2 = Math.floor(Math.random() * 20);

const thirdGameQuestion = `Question: ${randomNumber1} ${randomNumber2}`; 
thirdGameArr.push(thirdGameQuestion)



const denominatorsOne = [];

for (let i = 0; i <= randomNumber1; i++) {
if (randomNumber1 % i === 0) {
    denominatorsOne.push(i);    
}
else {
    continue;
}
}

const denominatorsTwo = [];

for (let i = 0; i <= randomNumber2; i++) {
if (randomNumber2 % i === 0) {
    denominatorsTwo.push(i);    
}
else {
    continue;
}
}

let commonDenominators = [];

for (const denominator of denominatorsOne) {
    if (denominatorsTwo.includes(denominator)) {
        commonDenominators.push(denominator);
    }

    }

let thirdGameAnswer = commonDenominators[commonDenominators.length-1];
thirdGameArr.push(thirdGameAnswer);
return thirdGameArr;
}

export { thirdGame };
