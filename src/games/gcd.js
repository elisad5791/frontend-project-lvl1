import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const isCommonDenominator = (num1, num2, denom) => num1 % denom === 0 && num2 % denom === 0;

const initGcd = () => {
  const roundsCount = 3;
  const rulesMessage = 'Find the greatest common divisor of given numbers.';

  const generateData = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const num1 = getRandomNumber(minNumber, maxNumber);
    const num2 = getRandomNumber(minNumber, maxNumber);
    const question = `${num1} ${num2}`;

    let result;
    let denominator = num1 < num2 ? num1 : num2;
    while (denominator >= 1) {
      if (isCommonDenominator(num1, num2, denominator)) {
        result = denominator;
        break;
      }
      denominator -= 1;
    }
    const answer = String(result);

    return [question, answer];
  };

  initGame(roundsCount, rulesMessage, generateData);
};

export default initGcd;
