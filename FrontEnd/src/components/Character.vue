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
        data: Array,
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
            catData: {
                labels: ['적극성', '겁(내향적)', '외향적', '변덕스러움', '친근함'],
                datasets: [
                    {
                        data: [3, 4, 4, 3, 5],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)',
                    },
                ],
            },
            // chart options
            options: {
                legend: {
                    display: false,
                },
                reponsive: true,
                scale: {
                    angleLines: {
                        display: false,
                    },
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1,
                        fontColor: '#fff',
                        backgroundColor: '#fff',
                        backdropColor: 'rgba(0,0,0,0)',
                    },
                    pointLabels: {
                        fontSize: 12,
                        fontColor: '#fff',
                        fontFamily: 'CookieRunOTF-Bold',
                        src: `url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff')`,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                    },
                },
            },
            chartObject: Object,
        };
    },
    methods: {
        createChart() {
            this.catData.datasets[0].data = this.data;
            const ctx = document.getElementById(this.id);

            // 그려질 그래프 설정.
            this.chartObject = new Chart(ctx, {
                type: 'radar',
                data: this.catData,
                options: this.options,
            });
        },
    },
};
</script>
<style scoped></style>
