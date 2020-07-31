import dotenv from "dotenv";

import express from 'express';
import cors from 'cors';
import routes from './routes';

import 'reflect-metadata';
import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

dotenv.config();

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
