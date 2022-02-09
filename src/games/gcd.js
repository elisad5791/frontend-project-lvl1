const isCommonDenominator = (num1, num2, denom) => num1 % denom === 0 && num2 % denom === 0;

const doStepGcd = () => {
  const maxNumber = 100;
  const num1 = Math.floor(Math.random() * maxNumber) + 1;
  const num2 = Math.floor(Math.random() * maxNumber) + 1;
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

export default doStepGcd;
