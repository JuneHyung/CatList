import http from '@/api/http.js';

function getAllTodoList() {
    return http.get(`todo/all`);
}

function postTodoList(temp) {
    return http.post(`todo`, temp);
}

function putTodoList(id, temp) {
    return http.put(`todo/${id}`, temp);
}

function deleteTodoList(id) {
    return http.delete(`todo/${id}`);
}
const message = {
    0: '나의 TodoList가 달력으로 표시됩니다.',
    1: '나의 TodoList를 확인할 수 있는 목록입니다.'
}
export {
    getAllTodoList,
    postTodoList,
    deleteTodoList,
    putTodoList,
    message
}