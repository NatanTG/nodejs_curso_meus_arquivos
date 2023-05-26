import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");



app.get("/dashboard", (req, res) => {
    res.render("dashboard");

});
app.get("/", (req, res) => {
    const auth = false;
    const approved = false;
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