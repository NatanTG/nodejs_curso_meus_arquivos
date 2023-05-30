import express from "express";
import exphbs from "express-handlebars";

import routes from "./rotas.js";

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(routes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});