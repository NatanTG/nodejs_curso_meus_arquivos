const x = "10"

try {
    //checando número inteiro
    if (x !== parseInt(x)) {
        throw new Error("x não é um número inteiro")
    }
    console.log("Continua código...")
}
catch (e) {
    console.log("Erro: " + e.message)
}