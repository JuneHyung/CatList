<template>
    <div>
        <p>방문차트 페이지</p>
        <visit-chart :id="visits" :visits="item"></visit-chart>
    </div>
</template>

<script>
import http from '@/util/http-common';
import visitChart from '@/components/VisitChart.vue';
export default {
    data() {
        return {
            item: [],
            today: '',
        };
    },
    components: {
        visitChart: visitChart,
    },
    created() {
        this.getToday();
        this.getVisitsList();
    },
    methods: {
        getToday() {
            const temp = new Date();
            const year = temp.getFullYear();
            const month = temp.getMonth() + 1;
            const date = temp.getDate();
            const cur = `${year}-${month}-${date}`;
            this.today = cur;
        },
        getVisitsList() {
            http.get(`visits/all`)
                .then(({ data }) => {
                    this.item = data;
                    this.checkToday();
                })
                .catch((error) => console.log(error));
        },
        checkToday() {
            let count = 0;
            for (let i = 0; i < this.item.length; i++) {
                if (this.item[i].today == this.today) {
                    this.updateVisits(this.item[i].view_id, this.item[i].views);
                    break;
                }
                count++;
                if (count == this.item.length) {
                    this.createVisits();
                }
            }
        },
        createVisits() {
            let createTemp = {
                today: this.today,
                views: 1,
            };

            http.post(`visits/create`, createTemp)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateVisits(view_id, views) {
            http.put(`visits/updateVisits`, {
                view_id: view_id,
                views: views,
            })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style></style>
