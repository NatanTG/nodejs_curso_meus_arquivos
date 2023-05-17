import inquirer from 'inquirer'

inquirer.prompt([{
    name: 'p1',
    message: 'Qual é o seu nome?'
}, {
    name: 'p2',
    message: 'Qual é a nota 1?'
}, {
    name: 'p3',
    message: 'Qual é a nota 2?'
}]).then(respostas => {
    console.log(respostas)
    const media = (parseInt(respostas.p2) + parseInt(respostas.p3)) / 2
    if (media >= 7) {
        console.log(`Olá ${respostas.p1}! Sua média é ${media} e você foi aprovado!`)
    } else {
        console.log(`Olá ${respostas.p1}! Sua média é ${media} e você foi reprovado!`)
    }
}).catch(err => { console.log(err) })