<template>
    <div
        style="
            background-color: rgba(123, 227, 225, 0.2);
            width: 80vw;
            height: 85vh;
            margin: 0 auto;
        "
    >
        <canvas id="visitsChart" style="width: 100%; height: 100%; margin: 0 auto"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js';

export default {
    name: 'visitChart',
    props: {
        data: Array,
    },

    mounted() {
        this.createChart();
    },
    watch: {
        data() {
            this.createChart();
        },
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
                        backgroundColor: 'rgba(123, 227, 225, 0.2)',
                        borderColor: '#7ce3e1',
                        pointBackgroundColor: '#7ce3e1',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#7ce3e1',
                    },
                ],
            },
            chartObject: Object,
        };
    },
    methods: {
        createChart() {
            for (let i = 0; i < this.data.length; i++) {
                this.visitData.labels.push(this.data[i].today);
                this.visitData.datasets[0].data.push(this.data[i].views);
            }
            const ctx = document.querySelector('#visitsChart');
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
