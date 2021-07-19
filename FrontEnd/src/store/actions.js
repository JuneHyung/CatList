import { getAppendList, getSearching } from '@/api/main.js';
export default {
    GET_APPEND_LIST({ commit }, start) {
        return getAppendList(start)
            .then(({ data }) => commit('setCats', data))
            .catch(err => console.log(err));
    },
    GET_SEARCHING_CAT({ commit }, keyword){
        if (keyword == '') {
            return getAppendList(0)
                .then(({ data }) => commit('setCats', data))
                .catch(err => console.log(err));
        } else {
            return getSearching(keyword)
                .then(({ data }) => commit('setCats', data))
            .catch(err => console.log(err));
        }
    }
}