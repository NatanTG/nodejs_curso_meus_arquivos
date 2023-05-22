//modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs from "fs";
import { type } from "os";

operation();

function operation() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "O que você deseja fazer?",
            choices: ["Criar conta", "Consultar conta", "Depositar", "Sacar", "Sair"],
        },
    ]).then((respostas) => {
        const action = respostas['action']
        if (action === "Criar conta") {
            createAccount();
        }
        else if (action === "Depositar") {
            deposit();
        }
        else if (action === "Consultar conta") {
            getAccountBalance();
        }
        else if (action === "Sacar") { }
        else if (action === "Sair") {
            console.log(chalk.blue("Obrigado por usar o Accounts"))
            process.exit()
        }
    }).catch((err) => console.log(err));
}



//funções
function createAccount() {
    console.log(chalk.blue("Obrigado por escolher nosso banco!"))
    console.log(chalk.blue("Vamos começar com o cadastro da sua conta."))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([{
        name: "accountName",
        message: "Escreva um nome para sua conta:",
    }]).then((respostas) => {
        const accountName = respostas['accountName']

        console.info(accountName)
        if (!fs.existsSync('./accounts')) {
            fs.mkdirSync('./accounts')
        }
        if (fs.existsSync(`./accounts/${accountName}.json`)) {
            console.log(chalk.red("Essa conta já existe!"))
            buildAccount()
            return
        }
        fs.writeFileSync(`./accounts/${accountName}.json`, '{"balance": 0}', function (err) { console.log(err) },)
        console.log(chalk.green("Conta criada com sucesso!"))
        operation()
    }).catch((err) => console.log(err));
}

function deposit() {
    inquirer.prompt([{
        name: "accountName",
        message: "Qual o nome da sua conta:",
    }]).then((respostas) => {
        const accountName = respostas['accountName']
        if (!checkAccount(accountName)) {
            deposit()
            return
        }

        inquirer.prompt([{
            name: "amount",
            message: "Qual o valor do depósito:",
        }]).then((respostas) => {
            const amount = respostas['amount']
            addAmount(accountName, amount)
            operation()

        }).catch((err) => console.log(err));
    }).catch((err) => console.log(err));
}

function checkAccount(accountName) {
    if (!fs.existsSync(`./accounts/${accountName}.json`)) {
        console.log(chalk.red("Essa conta não existe!"))
        return false
    } return true
}

function addAmount(accountName, amount) {
    const account = getAccount(accountName)

    if (!amount) {
        console.log(chalk.red("Valor inválido!"))
        return deposit()
    }
    account.balance = parseFloat(account.balance) + parseFloat(amount)

    fs.writeFileSync(`./accounts/${accountName}.json`, JSON.stringify(account), function (err) { console.log(err) },)

    console.log(chalk.green(`Depósito de ${amount} realizado com sucesso!`))
}

function getAccountBalance() {
    inquirer.prompt([{
        name: "accountName",
        message: "Qual o nome da sua conta:",
    }]).then((respostas) => {
        const accountName = respostas['accountName']
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }
        const account = getAccount(accountName)
        console.log(chalk.green(`O saldo da sua conta é: ${account.balance}`))
        operation()
    }).catch((err) => console.log(err));
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`./accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })
    return JSON.parse(accountJSON)
}