<template>
    <div>
        <h1 class="visitTitle">방문차트 페이지</h1>
        <visit :data="visits"></visit>
    </div>
</template>

<script>
import visitChart from '@/components/VisitChart.vue';
import { mapState } from 'vuex';
export default {
    name: 'Visit',
    components: {
        visit: visitChart,
    },
    computed: {
        ...mapState(['visits']),
    },
};
</script>

<style scoped>
.visitTitle {
    text-align: center;
    margin: 20px auto;
}
</style>
