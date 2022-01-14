import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import 'dotenv/config';

const app = express();

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
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`hello`);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listen Port = ${process.env.SERVER_PORT}`);
});
