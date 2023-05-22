import loadsh from 'loadsh';
import chalk from 'chalk';

const a = [1, 2, 3, 4, 5];
const b = [1, 6, 7, 8, 9];

const diff = loadsh.difference(a, b);

console.log(chalk.red.bold(diff));