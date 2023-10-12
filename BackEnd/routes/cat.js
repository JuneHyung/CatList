const express= require('express');
const router = express.Router();
const catController = require('../controllers/cat');

/**
 * @swagger
 * paths:
 *   /api/cats/search/:
 *    get:
 *      summary: "keyword로 고양이 목록 조회"
 *      description: "keyword가 들어간 모든 고양이 목록 조회"
 *      tags: [Cat]
 * responses:
 *      "200":
 *        description: 고양이의 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                cats:
 *                  type: object
 *                  example: [{ "id": 1, "name": "유저1" }]
 */
router.get('/search/', catController.getAllCatsByKeyword);


/**
 * @swagger
 * paths:
 *   /api/cats/kind/:
 *    get:
 *      summary: "kind로 고양이 목록 조회"
 *      description: "kind에 해당하는 모든 고양이 목록 조회"
 *      tags: [Cat]
 * responses:
 *      "200":
 *        description: 고양이의 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                cats:
 *                  type: object
 *                  example: [{ "id": 1, "name": "유저1" }]
 */
router.get('/kind', catController.getAllCatsByKind);

module.exports = router;