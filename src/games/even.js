import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const initEven = () => {
  const roundsCount = 3;
  const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateData = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const num = getRandomNumber(minNumber, maxNumber);
    const question = String(num);
    const answer = isEven(num) ? 'yes' : 'no';

    return [question, answer];
  };

  initGame(roundsCount, rulesMessage, generateData);
};

export default initEven;
