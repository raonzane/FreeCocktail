import { Router } from 'express';
import OauthController from '../Controllers/OauthController';

const oauthRouter = Router();

oauthRouter.post('/google', OauthController.Google);
/**
 * @swagger
 * paths:
 *  /oauth/google:
 *   post:
 *    tags: [Oauth]
 *    summary: 구글로그인
 *    parameters:
 *    - in: body
 *      name: idToken
 *      schema:
 *       idToken:
 *       type: string
 *
 *    responses:
 *      200:
 *       description: 로그인 성공
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/UserReturn'
 *      400:
 *       description: 유효하지않은 토큰
 */
oauthRouter.post('/naver', OauthController.Naver);
/**
 * @swagger
 * paths:
 *  /oauth/naver:
 *   post:
 *    tags: [Oauth]
 *    summary: 네이버로그인
 *    parameters:
 *    - in: body
 *      name: idToken
 *      schema:
 *       idToken:
 *       type: string
 *
 *    responses:
 *      200:
 *       description: 로그인 성공
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/UserReturn'
 *      400:
 *       description: 유효하지않은 토큰
 */

export default oauthRouter;
