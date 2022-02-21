import { Router } from 'express';
import RecipeController from '../Controllers/RecipeController';
const recipeRouter = Router();

recipeRouter.get('/tag', RecipeController.RecipeSerchTag);

export default recipeRouter;
