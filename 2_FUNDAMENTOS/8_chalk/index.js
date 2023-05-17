import chalk from 'chalk'

const nota = 5

if (nota >= 7) {
    console.log(chalk.green('Aprovado'))
} else {
    console.log(chalk.red('Reprovado'))
}