const express = require("express");
const path = require("path");

const router = express.Router();
const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
    res.sendFile(path.join(basePath, "formUser.html"));
});

router.post("/save", (req, res) => {
    const name = req.body.name;
    const idade = req.body.idade;
    console.log(`User name: ${name} and age: ${idade}`);

    res.send(`User name: ${name} and age: ${idade}`);

});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    //leitura da tabela users, resgate do usuário com o id
    console.log(`User id: ${id}`);

    res.sendFile(path.join(basePath, "users.html"));
});

module.exports = { router };
