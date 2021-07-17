import http from '@/api/http.js';

function getAllTodoList() {
    return http.get(`todo/all`);
}

function postTodoList(temp) {
    return http.post(`todo`, temp);
}

function deleteTodoList(id) {
    return http.delete(`todo/${id}`);
}

export {
    getAllTodoList,
    postTodoList,
    deleteTodoList,
}