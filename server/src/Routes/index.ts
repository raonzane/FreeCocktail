import * as express from 'express';
//import translateRoter from './translate';
import userRouter from './UserRouter';
import oauthRouter from './OauthRouter';
const app = express();

//app.use('/translate', translateRoter);
app.use('/user', userRouter);
app.use('/oauth', oauthRouter);

export default app;
