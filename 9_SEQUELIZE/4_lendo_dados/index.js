
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

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async (req, res) => {
    const { name, occupation } = req.body;
    let newsLetter = false;
    if (newsLetter === 'on') {
        newsLetter = true;
    }

    await User.create({ name, occupation, newsLetter })

    res.redirect('/');
});

app.get('/', async (req, res) => {

    const users = await User.findAll({ raw: true });

    res.render('home', { users });
});

conn.sync().then(() => {
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});