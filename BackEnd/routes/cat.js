const express= require('express');
const router = express.Router();
const catController = require('../controllers/cat');

/**
 * @swagger
 * paths:
 *  /api/cats/search:
 *    get:
 *      summary: "keyword로 고양이 목록 조회"
 *      description: "keyword가 들어간 모든 고양이 목록 조회"
 *      parameters:
 *        - in : query
 *          name : keyword
 *          description: 검색 키워드
 *          required: true
 *          schema:
 *            type: string
 *        - in : query
 *          name : curPage
 *          description: 현재 페이지
 *          required: true
 *          schema:
 *            type: number
 *            default: 1
 *      tags: [Cat]
 *      responses:
 *       "200":
 *          description: 고양이 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 *          contents:
 *            application/json:
 *              type: array,
 *              items:
 *                $refs: "#components/schema/catSchema"
 */
router.get('/search/', catController.getAllCatsByKeyword);


/**
 * @swagger
 * paths:
 *  /api/cats/kind:
 *    get:
 *      summary: "kind_code로 고양이 목록 조회"
 *      description: "kind_code에 맞는 모든 고양이 목록 조회. 이미지 파일로 인해 확인되지 않을 수 있습니다."
 *      parameters:
 *        - in : query
 *          name : kind_code
 *          description: 고양이 종류 코드
 *          required: true
 *          schema:
 *            type: string
 *        - in : query
 *          name : curPage
 *          description: 현재 페이지
 *          required: true
 *          schema:
 *            type: number
 *            default: 1
 *      tags: [Cat]
 *      responses:
 *       "200":
 *          description: 고양이 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 *          contents:
 *            application/json:
 *              type: array,
 *              items:
 *                $refs: "#catSchema"
 */
router.get('/kind', catController.getAllCatsByKind);

module.exports = router;