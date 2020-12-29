import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const userName = name.length === 0 ? 'User' : name;
  console.log(`Hello, ${userName}!`);
  return userName;
};
