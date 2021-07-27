import http from '@/api/http.js';
function getAllVisitList() {
    return http.get(`visits/all`);
};
function postVisits(createTemp) {
    return http.post(`visits/create`, createTemp)
}

function updateVisits(view_id, views) {
    return http.put(`visits/updateVisits`, {view_id, views})
}

const message = {
    0: '우리 사이트를 방문한 횟수가 차트로 그려집니다.',
}
export { getAllVisitList,postVisits,updateVisits, message}