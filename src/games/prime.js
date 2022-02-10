import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const initPrime = () => {
  const roundsCount = 3;
  const rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateData = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const num = getRandomNumber(minNumber, maxNumber);
    const question = String(num);
    const answer = isPrime(num) ? 'yes' : 'no';

    return [question, answer];
  };

  initGame(roundsCount, rulesMessage, generateData);
};

export default initPrime;
