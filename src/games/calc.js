const doStepCalc = () => {
  const operators = ['+', '-', '*'];

  const maxNumber = 100;
  const num1 = Math.floor(Math.random() * maxNumber) + 1;
  const num2 = Math.floor(Math.random() * maxNumber) + 1;
  const operationIndex = Math.floor(Math.random() * operators.length);

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

export default doStepCalc;
