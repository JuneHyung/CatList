<template>
    <div style="background-color: #fff; width: 100vw; height: 100vh; font-size: 14px">
        <canvas id="visitsChart"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js';
import { mapState } from 'vuex';
export default {
    name: 'visitChart',
    watch: {
        data() {
            this.visitData;
        },
    },
    computed: {
        ...mapState(['visits']),
    },
    created() {
        for (let i = 0; i < this.visits.length; i++) {
            this.visitData.labels.push(this.visits[i].today);
            this.visitData.datasets[0].data.push(this.visits[i].views);
        }
    },
    mounted() {
        this.createChart();
    },

    data() {
        return {
            visitData: {
                labels: [],
                datasets: [
                    {
                        label: 'visits count',
                        data: [],
                        tension: 0.5,
                    },
                ],
            },
            chartObject: Object,
        };
    },
    methods: {
        createChart() {
            const ctx = document.getElementById('visitsChart');
            // 그려질 그래프 설정.
            this.chartObject = new Chart(ctx, {
                type: 'line',
                data: this.visitData,
            });
        },
    },
};
</script>
<style scoped></style>
