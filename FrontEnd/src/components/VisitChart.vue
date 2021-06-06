<template>
    <div style="background-color: #fbceb1; height: 500px">
        <canvas :id="id" height="250px" width="250px"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js';
export default {
    name: 'Character',
    props: {
        id: String,
        visits: Array,
    },
    watch: {
        data() {
            this.createChart();
        },
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
                        data: [],
                        fill: true,
                    },
                ],
            },

            chartObject: Object,
        };
    },
    methods: {
        createChart() {
            console.log(this.visits);
            for (let i = 0; i < this.visits.length; i++) {
                this.visitData.labels.push(this.visits[i].today);
                this.visitData.datasets[0].data.push(this.visits[i].views);
            }
            const ctx = document.getElementById(this.id);
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
