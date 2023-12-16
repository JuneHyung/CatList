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

/**
 * @swagger
 * paths:
 *  /api/cats/add:
 *    post:
 *      summary: "고양이 정보 추가"
 *      description: "고양이 정보를 가지고, Cat과 Charc에 추가. charc_id는 catCharc + cat_code형태, create_date는 자동생성"
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                cat_name:
 *                  type: string
 *                  description: "고양이 이름"
 *                cat_age:
 *                  type: number
 *                  description: "고양이 나이"
 *                kind_code:
 *                  type: string
 *                  description: "고양이 종류"
 *                description:
 *                  type: string
 *                  description: "고양이 소개"
 *                profile:
 *                  type: string
 *                  description: "고양이 사진"
 *                address:
 *                  type: string
 *                  description: "주소"
 *                extrovert:
 *                  type: number
 *                  description: "외향적 성격값"
 *                introvert:
 *                  type: number
 *                  description: "내성적 성격값"
 *                curious:
 *                  type: number
 *                  description: "호기심 성격값"
 *                tranquil:
 *                  type: number
 *                  description: "조용한 성격값"
 *                independence:
 *                  type: number
 *                  description: "독립적 성격값"
 *                friendly:
 *                  type: number
 *                  description: "친근함 성격값"
 *      tags: [Cat]
 *      responses:
 *       "200":
 *          description: 고양이 추가 성공
 */
router.post('/info', catController.postCatInfo);

/**
 * @swagger
 * paths:
 *  /api/cats/udpate:
 *    put:
 *      summary: "고양이 정보 수정"
 *      description: "고양이 코드를 가지고, Cat과 Charc정보 수정."
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                cat_code:
 *                  type: number
 *                  description: "고양이 코드"
 *                cat_name:
 *                  type: string
 *                  description: "고양이 이름"
 *                cat_age:
 *                  type: number
 *                  description: "고양이 나이"
 *                kind_code:
 *                  type: string
 *                  description: "고양이 종류"
 *                description:
 *                  type: string
 *                  description: "고양이 소개"
 *                profile:
 *                  type: string
 *                  description: "고양이 사진"
 *                address:
 *                  type: string
 *                  description: "주소"
*                charc_id:
 *                  type: string
 *                  description: "고양이 성격 코드"
 *                extrovert:
 *                  type: number
 *                  description: "외향적 성격값"
 *                introvert:
 *                  type: number
 *                  description: "내성적 성격값"
 *                curious:
 *                  type: number
 *                  description: "호기심 성격값"
 *                tranquil:
 *                  type: number
 *                  description: "조용한 성격값"
 *                independence:
 *                  type: number
 *                  description: "독립적 성격값"
 *                friendly:
 *                  type: number
 *                  description: "친근함 성격값"
 *      tags: [Cat]
 *      responses:
 *       "200":
 *          description: 고양이 추가 성공
 */
router.put('/info', catController.putCatInfo);
/**
 * @swagger
 * paths:
 *  /api/cats/delete/{id}:
 *    delete:
 *      summary: "CatInfo 삭제"
 *      description: "userId가 일치한다면, cat_code를 가지고, 해당 Cat정보와 연관된 Charc정보가 삭제된다."
 *      parameters:
 *        - in: path
 *          name: cat_code
 *          description: "삭제할 고양이정보의 code"
 *          required: true
 *          schema:
 *            type: string
 *      tags: [Cat]
 *      responses:
 *       "200":
 *          description: 고양이 정보를 삭제합니다.
 */
router.delete('/info/:cat_code', catController.deleteCatInfo);
module.exports = router;