
import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import User from './model/User.js';
import conn from './db/conn.js';

const app = express();

// express para pegar o body em json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.render('home');
});

conn.sync().then(() => {
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});