const fifthGame = () => {
    let fifthGameArr = [];



const fifthGameIntroduction = 'What number is missing in the progression?';
fifthGameArr.push(fifthGameIntroduction);



const randomProgressionStep = Math.floor(Math.random() * 10);
const randomProgression = [];
let i = Math.floor(Math.random() * 6) + 2;
randomProgression.push(i);

while (i<50) {
    i = i + randomProgressionStep;
    randomProgression.push(i);
}
const hiddenNumberIndex = Math.floor(Math.random() * randomProgression.length);
const answer = randomProgression[hiddenNumberIndex];
randomProgression[hiddenNumberIndex] = '..';

let questionSequence = '';
for (const number of randomProgression) {
    questionSequence = questionSequence + ` ${number}`;
}
const fifthGameQuestion = `Question: ${questionSequence}`;
fifthGameArr.push(fifthGameQuestion);
fifthGameArr.push(answer);

return fifthGameArr;
}

export {fifthGame};