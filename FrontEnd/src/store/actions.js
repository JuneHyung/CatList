import { getAppendList } from '@/api/main.js';
export default {
    GET_APPEND_LIST({ commit }, start) {
        return getAppendList(start)
            .then(({ data }) => commit('setCats', data))
            .catch(err => console.log(err));
    }
}