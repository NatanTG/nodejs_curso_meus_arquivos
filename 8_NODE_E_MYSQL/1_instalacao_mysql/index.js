import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import mysql from 'mysql';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.render('home');
}
);

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