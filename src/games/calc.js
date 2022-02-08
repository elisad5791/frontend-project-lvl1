const calc = () => {
  const operators = ['+', '-', '*'];

  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const i = Math.floor(Math.random() * 3);

  const question = `${num1} ${operators[i]} ${num2}`;
  let result;
  switch (i) {
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

export default calc;
