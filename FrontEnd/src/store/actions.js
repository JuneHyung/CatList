import { getAppendList, getSearching } from '@/api/main.js';
import { getAllTodoList, deleteTodoList, putTodoList, postTodoList } from '@/api/todo.js';
import { getAllVisitList, postVisits, updateVisits} from '@/api/visit.js';

export default {
    GET_APPEND_LIST({ commit }, start) {
        return getAppendList(start)
            .then(({ data }) => commit('setCats', data))
            .catch(err => console.log(err));
    },
    GET_SEARCHING_CAT({ commit }, keyword){
        if (keyword == 'ALL') {
            return getAppendList(0)
                .then(({ data }) => commit('setCats', data))
                .catch(err => console.log(err));
        } else {
            return getSearching(keyword)
                .then(({ data }) => commit('setCats', data))
            .catch(err => console.log(err));
        }
    },
    GET_ALL_VISITS({ commit }) {
        return getAllVisitList().then(({ data }) => {
            commit('setVisits', data);
        }).catch(err => console.log(err));
    },
    POST_NEW_VISITS({ commit }, visits) {
        return postVisits(visits).then(commit('toggleFlag', true)).catch(err => console.log(err));
    },
    PUT_VISITS({ commit }, visits) {
        return updateVisits(visits.id, visits.views).then(commit('toggleFlag', true)).catch(err => console.log(err));
    },
    GET_ALL_TODOLIST({ commit }) {
        return getAllTodoList().then(({ data }) => {
            commit('setTodoList', data);
        }).catch(err => console.log(err));
    },
    POST_TODOLIST({ commit },item) {
        return postTodoList(item).then(
            commit('toggleFlag', true)
        ).catch(err => console.log(err));
    },
    PUT_TODOLIST({ commit }, item) {
        
        return putTodoList(item.lid, item.temp).then(
            commit('toggleFlag', true)
        ).catch(err => console.log(err));
    },
    DELETE_TODOLIST({ commit}, id) {
        return deleteTodoList(id).then(
            commit('toggleFlag', true)
        ).catch(err => console.log(err));
    }
}