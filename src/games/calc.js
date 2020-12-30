import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';
const MIN_NUMBER = 0;
const MAX_NUMBER = 10;

const addition = (a, b) => a + b;
const substruction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => Math.trunc((a / b) * 100) / 100;

const getRandomOperation = () => {
  const mappingOperation = {
    0: { symbol: '+', calculate: addition },
    1: { symbol: '-', calculate: substruction },
    2: { symbol: '*', calculate: multiplication },
    3: { symbol: '/', calculate: division },
  };

  const random = getRandomInt(0, 3);
  return mappingOperation[random];
};

const run = () => {
  const operation = getRandomOperation();
  const firstOperand = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondOperand = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${firstOperand} ${operation.symbol} ${secondOperand}`;
  const correctAnswer = `${operation.calculate(firstOperand, secondOperand)}`;

  return { question, correctAnswer };
};

export default { rules, run };
