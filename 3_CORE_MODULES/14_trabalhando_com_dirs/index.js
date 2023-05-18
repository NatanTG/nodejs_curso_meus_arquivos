const fs = require("fs")

if (!fs.existsSync('./minhapasta')) {
    console.log('pasta não existe')
    fs.mkdirSync('./minhapasta')
} else if (fs.existsSync('./minhapasta')) {
    console.log('pasta existe')
}
