const isEven = (num) => num % 2 === 0;

const doStepEven = () => {
  const maxNumber = 100;
  const num = Math.floor(Math.random() * maxNumber) + 1;
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default doStepEven;
