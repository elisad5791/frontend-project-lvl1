import readlineSync from 'readline-sync';
import doStepCalc from './games/calc.js';
import doStepEven from './games/even.js';
import doStepGcd from './games/gcd.js';
import doStepProgression from './games/progression.js';
import doStepPrime from './games/prime.js';

const initGame = (gameTitle, gameRounds) => {
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
        round = doStepCalc();
        break;
      case 'even':
        round = doStepEven();
        break;
      case 'gcd':
        round = doStepGcd();
        break;
      case 'progression':
        round = doStepProgression();
        break;
      case 'prime':
        round = doStepPrime();
        break;
      default:
        break;
    }
    const [question, correctAnswer] = round;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
      break;
    }
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default initGame;
