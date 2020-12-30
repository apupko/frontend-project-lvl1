import {
  readUserName,
  print,
  read,
  printResult,
} from './cli.js';

const runGame = (game, maxAttempts) => {
  const iter = (attempt) => {
    if (attempt === 0) return true;
    const { question, correctAnswer } = game.run();
    print(`Question: ${question}`);
    const userAnswer = read('Your answer: ');

    if (correctAnswer !== userAnswer) {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }

    print('Correct!');

    return iter(attempt - 1);
  };
  return iter(maxAttempts);
};

export default (game, maxAttempts = 3) => {
  const name = readUserName();
  print(game.rules);
  const gameResult = runGame(game, maxAttempts);
  printResult(name, gameResult);
};
