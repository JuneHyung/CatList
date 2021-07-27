<template>
    <div>
        <h1 class="visitTitle">방문차트 페이지</h1>
        <visit :data="visits" :data-intro="introM[0]"></visit>
    </div>
</template>

<script>
import visitChart from '@/components/VisitChart.vue';
import { mapState } from 'vuex';
import { message } from '@/api/visit.js';
import { startIntro } from '@/api/util.js';
export default {
    name: 'Visit',
    components: {
        visit: visitChart,
    },
    computed: {
        ...mapState(['visits']),
    },
    created() {
        this.introM = message;
    },
    mounted() {
        startIntro();
    },
    data() {
        return {
            introM: {},
        };
    },
};
</script>

<style scoped>
.visitTitle {
    text-align: center;
    margin: 20px auto;
}
</style>
