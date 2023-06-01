
import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

import { pool } from './db/conn.js';

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

// rota para inserir dados
app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = 'INSERT INTO books (title, pageqty) VALUES (?, ?)';
    const values = [title, pageqty];

    pool.query(sql, values, (err, data) => {
        if (err) { console.log(err) }
        res.redirect('/books');
    });
});

// rota para selecionar dados
app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';

    pool.query(sql, (err, data) => {
        if (err) { console.log(err); return }

        const books = data;

        console.log(books)

        res.render('books', { books });
    })
});

// rota para selecionar dados com where
app.get('/books/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM books WHERE id = ?';
    const values = [id];

    pool.query(sql, values, (err, data) => {
        if (err) { console.log(err); return }

        const book = data[0];

        res.render('book', { book });
    });
});

// rota para editar livros
app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM books WHERE id = ?';
    const values = [id];

    pool.query(sql, values, (err, data) => {
        if (err) { console.log(err); return }

        const book = data[0];
        res.render('editbook', { book });
    });
});

app.post('/books/updatebook/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = 'UPDATE books SET title = ?, pageqty = ? WHERE id = ?';
    const values = [title, pageqty, id];

    pool.query(sql, values, (err, data) => {
        if (err) { console.log(err); return }

        res.redirect('/books');
    });
});

// rota para deletar livros
app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM books WHERE id = ?';
    const values = [id];

    pool.query(sql, values, (err, data) => {
        if (err) { console.log(err); return }

        res.redirect('/books');
    });
});

app.listen(3000);
