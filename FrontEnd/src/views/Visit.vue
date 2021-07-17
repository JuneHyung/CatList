<template>
    <div>
        <h1 class="visitTitle">방문차트 페이지</h1>
        <visit :data="item"></visit>
    </div>
</template>

<script>
import visitChart from '@/components/VisitChart.vue';
import { getAllVisitList, postVisits, updateVisits } from '@/api/visit.js';
import { setToday } from '@/api/util.js';
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
            this.today = setToday();
        },
        getVisitsList() {
            getAllVisitList()
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

            postVisits(createTemp)
                .then(() => {})
                .catch((err) => {
                    console.log(err);
                });
        },
        updateVisits(view_id, views) {
            updateVisits(view_id, views)
                .then(() => {})
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
