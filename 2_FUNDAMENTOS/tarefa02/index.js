const inquirer = require('inquirer');
const chalk = require('chalk');
inquirer.prompt([{
    name: 'p1',
    message: 'Qual é o seu nome?'
}, {
    name: 'p2',
    message: 'Qual é sua idade',
    type: 'number'
}]).then(respostas => {
    console.log("O seu nome é: " + chalk.green(respostas.p1))
    console.log("E sua idade é: " + chalk.red(respostas.p2))
}).catch(err => { console.log(err) })