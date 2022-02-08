const progression = () => {
  const arr = [];
  let current = Math.floor(Math.random() * 101);
  const step = Math.floor(Math.random() * 11);
  for (let i = 0; i < 10; i += 1) {
    arr.push(current);
    current += step;
  }

  const index = Math.floor(Math.random() * 10);
  const answer = String(arr[index]);
  arr[index] = '..';
  const question = arr.join(' ');

  return [question, answer];
};

export default progression;
