import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;

    //leitura da tabela users, resgate do usuário com o id
    console.log(`User id: ${id}`);

    res.render("product", { id });

}
);


app.get("/", (req, res) => {

    const posts = [
        {
            title: "Produto 1",
            content: "Essa é a descrição do produto 1",
            price: 50,
        },
        {
            title: "Produto 2",
            content: "Essa é a descrição do produto 2",
            price: 100,
        },
        {
            title: "Produto 3",
            content: "Essa é a descrição do produto 3",
            price: 150,
        },
    ]
    res.render("home", { posts });

});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});