import { Router } from 'express';
import { Upload } from '../Modules/multer';
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
 *      description: 레시피 조회 성공
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
 *     - in: query
 *       name: tag
 *       schema:
 *         type: string
 *     - in: query
 *       name: lastRecipeId
 *       schema:
 *        type: integer
 *     - in: query
 *       name: size
 *       schema:
 *        type: integer
 *
 *    responses:
 *     200:
 *      description: 레시피 조회 성공
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
 *    parameters:
 *     - in: query
 *       name: lastRecipeId
 *       schema:
 *        type: integer
 *     - in: query
 *       name: size
 *       schema:
 *        type: integer
 *    responses:
 *     200:
 *      description: 레시피 조회 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 */

recipeRouter.post('/', Upload.single('image'), RecipeController.RecipeAdd);
/**
 * @swagger
 * paths:
 *  /recipe:
 *   post:
 *    tags: [Recipe]
 *    summary: 커스텀 레시피 작성
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *       schema:
 *        type: object
 *        properties:
 *         name:
 *          type: string
 *         image:
 *          type: string
 *          format: binary
 *         Ingredient:
 *          type: array
 *         measure:
 *          type: array
 *         Instructions:
 *          type: array
 *         tags:
 *          type: array
 *    responses:
 *     201:
 *      description: 레시피 작성 성공
 *     404:
 *      description: 잘못된 레시피 데이터
 */
recipeRouter.get('/page', RecipeController.RecipePageNation);
/**
 * @swagger
 * paths:
 *  /recipe/page:
 *   get:
 *    tags: [Recipe]
 *    summary: 원하는 범위에 레시피 조회
 *    parameters:
 *     - in: query
 *       name: lastRecipeId
 *       schema:
 *        type: integer
 *     - in: query
 *       name: size
 *       schema:
 *        type: integer
 *
 *    responses:
 *     200:
 *      description: 레시피 조회 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 */

recipeRouter.post('/like', RecipeController.RecipeLike);
/**
 * @swagger
 * paths:
 *  /recipe/like:
 *   post:
 *    tags: [Recipe]
 *    summary: 좋아요 추가 및 취소
 *    parameters:
 *    - in: body
 *      name: body
 *      schema:
 *       type: object
 *       properties:
 *        userId:
 *         type: integer
 *        recipeId:
 *         type: integer
 *        likeCheck:
 *         type: boolean
 *    responses:
 *     200:
 *      description: 좋아요 반영 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 *
 */

recipeRouter.get('/:id', RecipeController.RecipeFindId);
/**
 * @swagger
 * paths:
 *  /recipe/{id}:
 *   get:
 *    tags: [Recipe]
 *    summary: ID로 레시피 조회
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *    responses:
 *     200:
 *      description: 레시피 조회 성공
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/RecipeReturn'
 */

export default recipeRouter;
