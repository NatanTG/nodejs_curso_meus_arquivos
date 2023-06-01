import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import mysql from 'mysql';

const app = express();

//express para pegar o body em json

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.render('home');
});

//rota para inserir dados
app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

    conn.query(query, (err, result) => {
        if (err) { console.log(err) }
        res.redirect('/');
    });

});

//conexao com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql2'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');


    app.listen(3000)
});
    //fim da conexao com o banco de dados



