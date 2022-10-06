import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!\nMay I have your name?");

const username = readlineSync.question('Your answer: ');

export const name = username;

console.log("Hello, "+name+"!");

