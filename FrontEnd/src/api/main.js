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

const message = {
    0: '검색창 입니다.<br/> 이름으로 검색이 가능하고,<br/> 마이크버튼을 클릭하면 음성으로 검색할 수 있습니다. ',
    1: '고양이 정보가 담긴 카드입니다. <br/> 마우스를 올리면 거주지를 확인할 수 있고, 클릭 시 고양이 정보를 확인 할 수 있습니다.'
}
export { getAppendList, getCatsCharc, getSearching, message };