import express from "express";
import exphbs from "express-handlebars";
const app = express();
import conn from "./db/conn.js";
import productRoutes from "./routes/productRoutes.js";

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//read body

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//routes
app.use('/', productRoutes);

app.listen(3000)