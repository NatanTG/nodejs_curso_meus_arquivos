const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual é o seu nome? ', (nome) => {
    if (nome === "Gustavo") {
        console.log('GAAAAAAAY')
    } else {
        console.log(`Olá ${nome}!`)
    }
    readline.close()
})

