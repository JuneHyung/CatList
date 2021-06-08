<template>
    <div>
        <p>방문차트 페이지</p>
        <visit></visit>
    </div>
</template>

<script>
// import http from '@/util/http-common';
import visitChart from '@/components/VisitChart.vue';
export default {
    name: 'Visit',
    data() {
        return {};
    },
    components: {
        visit: visitChart,
    },
};
</script>

<style></style>
