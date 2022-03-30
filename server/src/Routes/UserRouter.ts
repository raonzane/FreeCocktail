import { Router } from 'express';
import { upload } from '../Modules/multer';
import UserController from '../Controllers/UserController';
const userRouter = Router();

userRouter.post('/signup', upload.single('image'), UserController.SignUp);
/**
 * @swagger
 * paths:
 *  /user/signup:
 *   post:
 *    tags: [User]
 *    summary: 회원가입
 *    parameters:
 *    - in: body
 *      name: body
 *      schema:
 *         type: object
 *         properties:
 *           nickname:
 *              type: string
 *           password:
 *              type: string
 *           email:
 *              type: string
 *           image:
 *              type: string
 *    responses:
 *      201:
 *       description: 회원가입 성공
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/UserReturn'
 *      409:
 *       description: 이미 가입된 이메일
 */
userRouter.delete('/:email', UserController.SignOut);
/**
 * @swagger
 * paths:
 *  /user/{email}:
 *   delete:
 *    tags: [User]
 *    summary: 회원탈퇴
 *    parameters:
 *    - in: path
 *      name: email
 *      schema:
 *         type: string
 *    responses:
 *      200:
 *       description: 회원탈퇴 성공
 *      404:
 *       description: 잘못된 회원 정보
 */
userRouter.post('/login', UserController.LogIn);
/**
 * @swagger
 * paths:
 *  /user/login:
 *   post:
 *    tags: [User]
 *    summary: 로그인
 *    parameters:
 *    - in: body
 *      name: body
 *      schema:
 *         type: object
 *         properties:
 *           email:
 *              type: string
 *           password:
 *              type: string
 *    responses:
 *      200:
 *       description: 로그인 성공
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/UserReturn'
 *      404:
 *       description: 잘못된 회원 정보
 */
userRouter.post('/logout', UserController.LogOut);
/**
 * @swagger
 * paths:
 *  /user/logout:
 *   post:
 *    tags: [User]
 *    summary: 로그아웃
 *    responses:
 *      200:
 *       description: 로그아웃 성공
 */
userRouter.get('/:email', UserController.UserInfo);
/**
 * @swagger
 * paths:
 *  /user/{email}:
 *   get:
 *    tags: [User]
 *    summary: 유저 정보조회
 *    parameters:
 *    - in: path
 *      name: email
 *      schema:
 *         type: string
 *    responses:
 *      200:
 *       description: 조회성공
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      404:
 *       description: 잘못된 회원 정보
 */

userRouter.patch('/:email', upload.single('image'), UserController.Edit);
/**
 * @swagger
 * paths:
 *  /user/{email}:
 *   patch:
 *    tags: [User]
 *    summary: 유저 정보수정
 *    parameters:
 *    - in: path
 *      name: userId
 *      schema:
 *         type: string
 *    - in: body
 *      name: body
 *      schema:
 *         type: object
 *         properties:
 *           nickname:
 *              type: string
 *           password:
 *              type: string
 *           image:
 *              type: string
 *    responses:
 *      200:
 *       description: 유저정보 수정성공
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      404:
 *       description: 잘못된 회원 정보
 */
export default userRouter;
