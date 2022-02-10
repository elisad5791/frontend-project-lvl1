import readlineSync from 'readline-sync';

const initGame = (roundsCount, rulesMessage, generateData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesMessage);

  let result = true;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateData();

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
