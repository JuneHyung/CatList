const express= require('express');
const router = express.Router();
const charcController = require('../controllers/charc');

/**
 * @swagger
 * paths:
 *  /api/charc/search/{charcId}:
 *    get:
 *      summary: "고양이 성격 조회"
 *      description: "고양이의 성격아이디로 해당 고양이의 성격 조회"
 *      parameters:
 *        - in : path
 *          name : charcId
 *          description: 성격 아이디 키워드
 *          default: catCharc1
 *          required: true
 *          schema:
 *            type: string
 *      tags: [Charactor]
 *      responses:
 *       "200":
 *          description: 고양이의 성격정보값을 가져옵니다..
 */
router.get('/search/:charcId', charcController.getCatCharcByCharcId);

module.exports = router;