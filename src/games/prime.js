const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const doStepPrime = () => {
  const maxNumber = 100;
  const num = Math.floor(Math.random() * maxNumber) + 1;
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default doStepPrime;
