const path = require('path');

//path absoluto
console.log(path.resolve('test.txt'))

//formar path 
const midFolder = 'teste'
const fileName = 'test.txt'

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)