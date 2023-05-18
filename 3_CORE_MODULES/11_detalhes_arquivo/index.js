const fs = require("fs")
fs.stat("arquivo.txt", (err, stats) => {
    if (err) {
        console.log(err)
    }
    console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
    console.log(stats.birthtime)
    console.log(stats.atime)
    console.log(stats.mtime)
    console.log(stats.ctime)

})