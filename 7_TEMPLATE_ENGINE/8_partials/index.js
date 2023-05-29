import express from "express";
import exphbs from "express-handlebars";

const app = express();
const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.get("/blog", (req, res) => {
    const posts = [
        {
            title: "Post 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
        },
        {
            title: "Post 2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
        },
        {
            title: "Post 3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
        },
    ]

    res.render("/blog", { posts });
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