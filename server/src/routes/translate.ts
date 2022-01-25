import { Router } from 'express';
import { GoogleTranslate, TagEdit } from '../controllers/translate';
/**
   * @swagger
   * paths:
   *   /translate:
   *    post:
   *      tags: [translate]
   *      summary: 칵테일 API 번역후 DB 추가
   *      parameters:
   *        - name: testBody
   *          in: body
   *          description: 테스트 
   *          example: 테스트테스트

   *      responses:
   *        200:
   *          description: Drink 객체 반환
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/Drink'
   *        400:
   *          description: Invalid request
   *        409:
   *          description: Not have that kind of product
   */
const translateRoter = Router();

translateRoter.post('/', GoogleTranslate);

translateRoter.post('/tag', TagEdit);

export default translateRoter;
