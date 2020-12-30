import readlineSync from 'readline-sync';

export const readUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const userName = name.length === 0 ? 'User' : name;
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const print = (message) => console.log(message);

export const read = (prompt = '') => readlineSync.question(prompt);

export const printResult = (name, isWin) => {
  if (isWin) {
    print(`Congratulations, ${name}!`);
    return;
  }
  print(`Let's try again, ${name}!`);
};
