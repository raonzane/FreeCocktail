import { Router } from 'express';
import RecipeController from '../Controllers/RecipeController';
const recipeRouter = Router();

recipeRouter.get('/', RecipeController.RecipeFindAll);
/**
 * @swagger
 * paths:
 *  /recipe:
 *   get:
 *    tags: [Recipe]
 *    summary: 전체 레시피 조회
 *    responses:
 *     200:
 *      rescription: 레시피 조회 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 */

recipeRouter.get('/tag', RecipeController.RecipeSerchTag);
/**
 * @swagger
 * paths:
 *  /recipe/tag:
 *   get:
 *    tags: [Recipe]
 *    summary: 태그에 해당하는 레시피 조회
 *    parameters:
 *    - in: body
 *      name: body
 *      content:
 *       application/x-www-form-urlencoded:
 *        schema:
 *         type: array
 *         items:
 *          type: string
 *    responses:
 *     200:
 *      rescription: 레시피 조회 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 */

recipeRouter.get('/like', RecipeController.RecipeFindLike);
/**
 * @swagger
 * paths:
 *  /recipe/like:
 *   get:
 *    tags: [Recipe]
 *    summary: 좋아요 순으로 레시피 조회
 *    responses:
 *     200:
 *      rescription: 레시피 조회 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 */

export default recipeRouter;
