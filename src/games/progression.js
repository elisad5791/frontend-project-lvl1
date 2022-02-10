import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const initProgression = () => {
  const roundsCount = 3;
  const rulesMessage = 'What number is missing in the progression?';

  const generateData = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const minStep = 1;
    const maxStep = 10;
    const progressionLength = 10;

    const progression = [];
    let current = getRandomNumber(minNumber, maxNumber);
    const progressionStep = getRandomNumber(minStep, maxStep);
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(current);
      current += progressionStep;
    }

    const missingIndex = getRandomNumber(0, progressionLength - 1);
    const answer = String(progression[missingIndex]);
    progression[missingIndex] = '..';
    const question = progression.join(' ');

    return [question, answer];
  };

  initGame(roundsCount, rulesMessage, generateData);
};

export default initProgression;
