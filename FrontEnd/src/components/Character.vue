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
    },
    mounted() {
        this.createChart();
    },

    data() {
        return {
            catData: {
                labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running',
                ],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [65, 59, 90, 81, 56, 55, 40],
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
                        max: 100,
                        stepSize: 10,
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
            // this.catData.label = this.labels;
            // this.catData.datasets[0].data = this.character;
            console.log('id : ' + this.id);
            const ctx = document.getElementById(this.id);
            console.log(ctx);
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
