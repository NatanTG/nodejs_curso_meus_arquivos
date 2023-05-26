const express = require("express");
const path = require("path");

const { router } = require("./users/index.js");

const app = express();
const port = 3000;
const basePath = path.join(__dirname, "templates");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("public")));
app.use("/users", router);

app.get("/", (req, res) => {
    res.sendFile(path.join(basePath, "index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
