const fs = require('fs');

console.log('Inicio');

fs.writeFile('arquivo.txt', 'Hello World!', function (err) {
    setTimeout(function () {
        console.log('arquivo.txt criado');
    }, 1000)
})
console.log('Fim');