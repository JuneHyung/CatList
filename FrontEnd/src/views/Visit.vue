<template>
    <div>
        <h1 class="visitTitle">방문차트 페이지</h1>
        <visit :data="item"></visit>
    </div>
</template>

<script>
// import http from '@/util/http-common';
import visitChart from '@/components/VisitChart.vue';
import http from '@/api/http.js';
export default {
    name: 'Visit',
    data() {
        return {
            item: [],
            today: '',
        };
    },
    components: {
        visit: visitChart,
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
                // console.log('i' + this.item.length);
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
                .then(() => {
                    // console.log(response.data);
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
                .then(() => {
                    // console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped>
.visitTitle {
    text-align: center;
    margin: 20px auto;
}
</style>
