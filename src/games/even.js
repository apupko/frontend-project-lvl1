import getRandomInt from '../utils.js';

const YES = 'yes';
const NO = 'no';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? YES : NO);

const run = () => {
  const number = getRandomInt(0, 1024);
  const question = `${number}`;
  const correctAnswer = isEven(number);
  return { question, correctAnswer };
};

export default { rules, run };
