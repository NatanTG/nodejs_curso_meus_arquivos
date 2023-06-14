import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

import conn from './db/conn.js';
import Task from './models/Task.js';

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

conn.sync()
    .then(() => {
        console.log('Conectado ao banco de dados');
    }
    ).catch((error) => {
        console.log(error);
    });

