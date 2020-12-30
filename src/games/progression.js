import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';
const MIN_PROGRESSION_LEN = 8;
const MAX_PROGRESSION_LEN = 12;
const MIN_STEP = 1;
const MAX_STEP = 20;
const MIN_FIRST_NUMBER = 0;
const MAX_FIRST_NUMBER = 100;

const getRandomProgression = () => {
  const len = getRandomInt(MIN_PROGRESSION_LEN, MAX_PROGRESSION_LEN);
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const firstNumber = getRandomInt(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
  return Array(len).fill(firstNumber).map((item, index) => item + index * step);
};

const run = () => {
  const progression = getRandomProgression();
  const numberIndex = getRandomInt(0, progression.length - 1);

  const question = progression.reduce((acc, item, index) => (
    index !== numberIndex ? `${acc} ${item}` : `${acc} ..`
  ), '');
  const correctAnswer = `${progression[numberIndex]}`;

  return { question, correctAnswer };
};

export default { rules, run };
