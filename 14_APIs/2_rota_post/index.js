import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas - endpoints
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.post('/createproduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    console.log(name);
    console.log(price);

    res.json({ message: `Product ${name} created` });
});

app.listen(3000, () => console.log('API Started'));