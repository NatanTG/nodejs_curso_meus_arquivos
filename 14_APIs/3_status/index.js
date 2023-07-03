import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas - endpoints
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});

app.post('/createproduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (!name) {
        res.status(422).json({ message: 'Name is required' });
        return
    }

    console.log(name);
    console.log(price);

    res.status(201).json({ message: `Product ${name} created` });
});

app.listen(3000, () => console.log('API Started'));