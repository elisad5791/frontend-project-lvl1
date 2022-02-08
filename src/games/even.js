const isEven = (num) => num % 2 === 0;

const even = () => {
  const num = Math.floor(Math.random() * 101);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default even;
