import express from 'express';
import cors from 'cors';

const app = express();

//config json
app.use(express.json());

//solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

//public folder for images
app.use(express.static('public'));

//routes

app.listen(5000)