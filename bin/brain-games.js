#!/usr/bin/env node

import readline from './src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readline();
console.log(`Hello, ${name}`);
