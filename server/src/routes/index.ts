import * as express from 'express';
import translateRoter from './translate';
const app = express();

app.use('/translate', translateRoter);

export default app;
