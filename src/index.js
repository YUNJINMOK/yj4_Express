import 'dotenv/config';
import './db';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import appleRouter from './Routers/appleRoutes';
import noticeRouter from './routers/notice';
const app = express();

const corsOptions = {
    origin: ['http://localhost:5172', 'http://localhost:3000'],
};

const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send({ name: 'kenjo' }));
app.use('/apple', appleRouter);
app.use('/notice', noticeRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
