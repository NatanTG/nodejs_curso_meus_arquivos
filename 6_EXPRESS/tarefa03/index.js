const express = require("express");
const path = require("path");

const { router } = require("./users/users.js");

const app = express();
const port = 5000;
const basePath = path.join(__dirname, "templates");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", router);

app.get("/users/add", (req, res) => {
    res.sendFile(path.join(basePath, "formUse.html"));
});
app.get("/users/bla", (req, res) => {
    res.sendFile(path.join(basePath, "bla.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.join(basePath, "index.html"));
});



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(basePath, "404.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
