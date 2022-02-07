import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';

const game = (gameTitle, gameRounds) => {
  let rulesMessage;
  switch (gameTitle) {
    case 'calc':
      rulesMessage = 'What is the result of the expression?';
      break;
    case 'even':
      rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
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
