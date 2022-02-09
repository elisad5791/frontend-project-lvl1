const doStepProgression = () => {
  const maxNumber = 100;
  const maxProgressionStep = 10;
  const progressionLength = 10;

  const progression = [];
  let current = Math.floor(Math.random() * maxNumber) + 1;
  const progressionStep = Math.floor(Math.random() * maxProgressionStep) + 1;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(current);
    current += progressionStep;
  }

  const missingIndex = Math.floor(Math.random() * progressionLength);
  const answer = String(progression[missingIndex]);
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default doStepProgression;
