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

export { getAllVisitList,postVisits,updateVisits}