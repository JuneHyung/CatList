const express= require('express');
const router = express.Router();
const todoController = require('../controllers/todo');


/**
 * @swagger
 * paths:
 *  /api/todo/search/{todoStatus}/{focusDate}:
 *    get:
 *      summary: "todoList 조회"
 *      description: "todoStatus의 focusDate 전 후로 한 달사이 리스트를 모두 가져온다."
 *      parameters:
 *        - in: path
 *          name: todoStatus
 *          description: 선택한 todoStatus
 *          required: true
 *          schema:
 *            type: string
 *            default: "todo"
 *        - in: path
 *          name: focusDate
 *          description: 선택된 date
 *          required: true
 *          schema:
 *            type: string
 *            default: "2023-09-07"
 *      tags: [Todo]
 *      responses:
 *       "200":
 *          description: todoList를 response
 */
router.get('/search/:todoStatus/:focusDate', todoController.getAllTodoList);

/**
 * @swagger
 * paths:
 *  /api/todo/status:
 *    put:
 *      summary: "todo status 수정"
 *      description: "todoStatus의 focusDate 전 후로 한 달사이 리스트를 모두 가져온다."
 *      requestBody: # requestBody 키를 사용하여 요청 바디를 정의
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: "item의 status"
 *                 todo_id:
 *                   type: string
 *                   description: "todo item의 id"
 *      tags: [Todo]
 *      responses:
 *       "200":
 *          description: 고양이 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 */
router.put('/status', todoController.updateCurStatus);

/**
 * @swagger
 * paths:
 *  /api/todo/item/{id}:
 *    delete:
 *      summary: "todoItem 삭제"
 *      description: "todoStatus의 focusDate 전 후로 한 달사이 리스트를 모두 가져온다."
 *      parameters:
 *        - in: path
 *          name: id
 *          description: "삭제할 아이템의 ID"
 *          required: true
 *          schema:
 *            type: string
 *      tags: [Todo]
 *      responses:
 *       "200":
 *          description: 고양이 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 */
router.delete('/item/:id', todoController.deleteTodoItem);

/**
 * @swagger
 * paths:
 *  /api/todo/item:
 *    post:
 *      summary: "todoItem 저장"
 *      description: "새로운 todo item을 저장"
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  description: "todo item의 title"
 *                content:
 *                  type: string
 *                  description: "todo item의 내용"
 *                start:
 *                  type: string
 *                  description: "todo item의 시작날짜"
 *                end:
 *                  type: string
 *                  description: "todo item의 종료날짜"
 *                status:
 *                  type: string
 *                  description: "todo item의 싱태"
 *      tags: [Todo]
 *      responses:
 *       "200":
 *          description: 고양이 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 */
router.post('/item', todoController.postTodoItem);

/**
 * @swagger
 * paths:
 *  /api/todo/item:
 *    put:
 *      summary: "todoItem 수정"
 *      description: "todo_id의 item내용을 수정"
 *      requestBody:
 *             required: true
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     todo_id:
 *                       type: string
 *                       description: "todo item의 id"
 *                     title:
 *                       type: string
 *                       description: "todo item의 title"
 *                     content:
 *                       type: string
 *                       description: "todo item의 내용"
 *                     start:
 *                       type: string
 *                       description: "todo item의 시작날짜"
 *                     end:
 *                       type: string
 *                       description: "todo item의 종료날짜"
 *                     status:
 *                       type: string
 *                       description: "todo item의 싱태"
 *      tags: [Todo]
 *      responses:
 *       "200":
 *          description: 고양이 정보, 해당타입의 고양이 특징을 같이 가져옵니다.
 */
router.put('/item', todoController.putTodoItem);

module.exports = router;