import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import router from './routes';

import { createConnection } from 'typeorm';
import { config } from '../ormconfig';

const app = express();

createConnection(config)
  .then(() => {
    console.log('DB CONNECTION!');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);

app.use('/', router);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`hello`);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listen Port = ${process.env.SERVER_PORT}`);
});
