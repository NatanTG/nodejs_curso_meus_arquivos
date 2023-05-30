import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));


app.get("/dashboard", (req, res) => {

    const items = [
        "item1", "item2", "item3", "item4", "item5"
    ];

    res.render("dashboard", { items });

});

app.get("/post", (req, res) => {

    const post = {
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
    };

    res.render("post", { post });


});

app.get("/", (req, res) => {
    const auth = true;
    const approved = true;
    const user = {
        name: "John",
        age: 20,
        isMale: true,
        city: "New York"
    };
    res.render("home", { user, auth });

});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});