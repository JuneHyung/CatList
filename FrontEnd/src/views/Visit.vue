<template>
    <div>
        <h1 class="visitTitle">방문차트 페이지</h1>
        <visit :data="visits" id="step1"></visit>
    </div>
</template>

<script>
import visitChart from '@/components/VisitChart.vue';
import { mapState } from 'vuex';
import { startIntro } from '@/api/util.js';
export default {
    name: 'Visit',
    components: {
        visit: visitChart,
    },
    computed: {
        ...mapState(['visits', 'visitIntro']),
    },
    data() {
        return {
            step: [],
        };
    },
    mounted() {
        this.checkIntro();
    },
    methods: {
        async checkIntro() {
            if (!this.visitIntro) {
                await this.setOptions();
                await startIntro(this.step);
                await this.$store.commit('toggleState', 'Visit');
            }
        },
        setOptions() {
            this.step = [
                {
                    title: '페이지 방문 차트',
                    intro: '일별로 페이지의 방문횟수를 체크할 수 잇습니다.',
                },
                {
                    element: document.querySelector('#step1'),
                    title: '페이지 방문 차트',
                    intro: '우리 사이트를 방문한 횟수가 차트로 그려집니다.',
                },
            ];
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
