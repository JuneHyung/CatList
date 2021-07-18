import http from '@/api/http.js'
function getAppendList(start) {
    return http.get(`/cats/${start}`);
}

function getCatsCharc(catnum) {
    return http.get(`/cats/charc/${catnum}`)
}

function getSearching(keyword) {
    return http.get(`/cats/search/${keyword}`)
}

export { getAppendList, getCatsCharc, getSearching };