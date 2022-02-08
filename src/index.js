import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const game = (gameTitle, gameRounds) => {
  let rulesMessage;
  switch (gameTitle) {
    case 'calc':
      rulesMessage = 'What is the result of the expression?';
      break;
    case 'even':
      rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'gcd':
      rulesMessage = 'Find the greatest common divisor of given numbers.';
      break;
    case 'progression':
      rulesMessage = 'What number is missing in the progression?';
      break;
    case 'prime':
      rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    default:
      break;
  }

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesMessage);

  let result = true;
  for (let i = 0; i < gameRounds; i += 1) {
    let round;
    switch (gameTitle) {
      case 'calc':
        round = calc();
        break;
      case 'even':
        round = even();
        break;
      case 'gcd':
        round = gcd();
        break;
      case 'progression':
        round = progression();
        break;
      case 'prime':
        round = prime();
        break;
      default:
        break;
    }
    const [question, rightAnswer] = round;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
      break;
    }
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
