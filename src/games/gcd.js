import getRandomInt from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 0;
const MAX_NUMBER = 50;

const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};

const run = () => {
  const firstNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${gcd(firstNumber, secondNumber)}`;

  return { question, correctAnswer };
};

export default { rules, run };
