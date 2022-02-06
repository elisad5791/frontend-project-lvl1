#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let result = true;
for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const rightEven = num % 2 === 0 && answer === 'yes';
  const rightOdd = num % 2 === 1 && answer === 'no';
  if (rightEven || rightOdd) {
    console.log('Correct!');
  } else {
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    result = false;
    break;
  }
}

if (result) {
  console.log(`Congratulations, ${name}!`);
}
