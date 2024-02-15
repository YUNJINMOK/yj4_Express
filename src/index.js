import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
const app = express();

const corsOptions = {
    origin: 'http://localhost:5172',
};

const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send({ name: 'kenjo' }));

app.get('/apple', (req, res) => res.send({ name: 'apple' }));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
