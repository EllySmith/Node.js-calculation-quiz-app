import readlineSync from 'readline-sync';

const arrow = [];
for (let i = 1; i < 7; i += 1) {
const newNumber = readlineSync.question('Add number: ');
const numberToAdd = newNumber;
arrow.push(numberToAdd);
console.log(`Thank you! ${6-i} numbers left.`);
}

console.log(`Here are the numbers: \n${arrow[0]}\n${arrow[1]}\n${arrow[2]}\n${arrow[3]}\n${arrow[4]}\n${arrow[5]}`);
const sum = (arrow) => {
     let result = 0;
     for (const element of arrow) {
          result = result + Number(element);
     }
     return result;
}

const multiply = (arrow) => {
     let result = 1;
     for (const element of arrow) {
          result = result * Number(element);
     }
     return result;
}

function compareNumbers(a, b) {
     return a - b;
   }

console.log(`Their sum is ${sum(arrow)}`);
console.log(`Their product is ${multiply(arrow)}`);
console.log(`These are the elements organized in the row ${arrow.sort(compareNumbers)}`);
