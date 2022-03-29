import * as express from 'express';
//import translateRoter from './translate';
import userRouter from './UserRouter';
import oauthRouter from './OauthRouter';
import recipeRouter from './RecipeRouter';
const app = express();

//app.use('/translate', translateRoter);
app.use('/user', userRouter);
app.use('/oauth', oauthRouter);
app.use('/recipe', recipeRouter);

export default app;
