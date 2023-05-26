import Express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const app = Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const basePath = path.join(__dirname, "templates");
const checkAuth = (req, res, next) => {
    req.authStatus = true;
    if (req.authStatus) {
        console.log("User is authenticated");
        next();
    } else {
        console.log("User is not authenticated");
        next()
    }
}

app.use(checkAuth);
app.use(Express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(Express.json()); // for parsing application/json
app.get("/users/add", (req, res) => {
    res.sendFile(`${basePath}/formUser.html`);
});

app.post("/users/save", (req, res) => {
    const name = req.body.name;
    const idade = req.body.idade;
    console.log(`User name: ${name} and age: ${idade}`);
    res.send(`User name: ${name} and age: ${idade}`);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    //leitura da tabela users, resgate do usuário com o id
    console.log(`User id: ${id}`);

    res.sendFile(`${basePath}/users.html`);

}
);
app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

}
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);