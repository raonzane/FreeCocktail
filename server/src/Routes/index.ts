import * as express from 'express';
//import translateRoter from './translate';
import userRoter from './UserRouter';
const app = express();

//app.use('/translate', translateRoter);
app.use('/user', userRoter);

export default app;
