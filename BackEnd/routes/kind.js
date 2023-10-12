const express= require('express');
const router = express.Router();
const kindController = require('../controllers/kind');

/**
 * @swagger
 * paths:
 *  /api/kind:
 *    get:
 *      summary: "고양이 종류 조회"
 *      description: "고양이의 모든 종류 목록조회"
 *      tags: [Kind]
 *      responses:
 *       "200":
 *          description: 고양이의 모든 정보 목록을 가져옵니다..
 */
router.get('/', kindController.getAllKind);

module.exports = router;