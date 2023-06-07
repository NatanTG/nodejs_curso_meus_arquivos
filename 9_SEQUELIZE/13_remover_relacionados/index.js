
import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import User from './model/User.js';
import Address from './model/Address.js';
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
    let newsLetter = req.body.newsLetter;
    if (newsLetter === 'on') {
        newsLetter = true;
    } else {
        newsLetter = false;
    }

    await User.create({ name, occupation, newsLetter })

    res.redirect('/');
});



app.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({ raw: true, where: { id: id } });

    res.render('userview', { user });


});
app.get('/users/edit/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ include: Address, where: { id: id } });
        res.render('useredit', { user: user.get({ plain: true }) });
    } catch (error) {
        console.log(error);
    }
});

app.post('/users/update', async (req, res) => {
    const { id, name, occupation } = req.body;
    let newsLetter = req.body.newsLetter;
    if (newsLetter === 'on') {
        newsLetter = true;
    } else {
        newsLetter = false;
    }

    const userData = {
        name,
        occupation,
        newsLetter

    }

    await User.update({ name, occupation, newsLetter }, { where: { id: id } });

    res.redirect('/');
});


app.post('/users/delete/:id', async (req, res) => {
    const { id } = req.params;

    await User.destroy({ where: { id: id } });


    res.redirect('/');
});

app.get('/users/edit/:id', async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({ raw: true, where: { id: id } });

    res.render('useredit', { user });
});

app.post('/address/create', async (req, res) => {
    const { street, number, city, userId } = req.body;

    const address = {
        street,
        number,
        city,
        userId
    }

    await Address.create(address);

    res.redirect(`/users/edit/${userId}`);

});



app.get('/', async (req, res) => {

    const users = await User.findAll({ raw: true });

    res.render('home', { users });
});

conn.
    //sync({ force: true })
    sync()
    .then(() => {
        app.listen(3000);
    }).catch((err) => {
        console.log(err);
    });