import readlineSync from 'readline-sync';
import welcome from './cli.js';

const MIN_VALUE = 0;
const MAX_VALUE = 1024;
const YES = 'yes';
const NO = 'no';

const printRules = () => (
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
);

const getRandomInt = (min = MIN_VALUE, max = MAX_VALUE) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const printQuestion = (number) => console.log(`Question: ${number}`);

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const printAnswer = (name, userAnswer, isCorrect, correct) => {
  if (isCorrect) {
    console.log('Correct!');
    return;
  }

  const correctAnswer = correct ? YES : NO;
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

const printGameResult = (name, isWin) => {
  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

const isEven = (number) => number % 2 === 0;

const runGame = (name, attemptsCount = 3) => {
  const iter = (attempt, result = true) => {
    const normalize = {
      yes: true,
      no: false,
    };

    if (attempt > attemptsCount) {
      return result;
    }

    const number = getRandomInt();
    printQuestion(number);
    const userAnswer = getAnswer();
    const correctAnswer = isEven(number);

    const isCorrect = correctAnswer === normalize[userAnswer];
    printAnswer(name, userAnswer, isCorrect, correctAnswer);
    return iter(attempt + 1, isCorrect ? result : false);
  };
  return iter(1);
};

export default () => {
  const name = welcome();
  printRules();
  const gameResult = runGame(name);
  printGameResult(name, gameResult);
};
