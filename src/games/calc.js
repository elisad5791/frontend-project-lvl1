import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const initCalc = () => {
  const roundsCount = 3;
  const rulesMessage = 'What is the result of the expression?';

  const generateData = () => {
    const operators = ['+', '-', '*'];

    const minNumber = 1;
    const maxNumber = 100;
    const num1 = getRandomNumber(minNumber, maxNumber);
    const num2 = getRandomNumber(minNumber, maxNumber);
    const operationIndex = getRandomNumber(0, operators.length - 1);

    const question = `${num1} ${operators[operationIndex]} ${num2}`;
    let result;
    switch (operationIndex) {
      case 0:
        result = num1 + num2;
        break;
      case 1:
        result = num1 - num2;
        break;
      case 2:
        result = num1 * num2;
        break;
      default:
        break;
    }
    const answer = String(result);

    return [question, answer];
  };

  initGame(roundsCount, rulesMessage, generateData);
};

export default initCalc;
