const isCommonDenominator = (num1, num2, i) => num1 % i === 0 && num2 % i === 0;

const gcd = () => {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
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

export default gcd;
