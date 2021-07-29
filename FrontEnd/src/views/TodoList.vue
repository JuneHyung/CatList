<template>
    <v-container>
        <p>todolist가 들어갈 곳</p>
        <v-row class="fill-height" style="margin-top: 10px">
            <calendar :items="items" id="step1"></calendar>
            <td-list :items="items" id="step2"></td-list>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Calendar from '@/components/Calendar.vue';
import TdList from '@/components/TdList.vue';
import { startIntro } from '@/api/util.js';
export default {
    components: {
        Calendar,
        TdList,
    },
    computed: {
        ...mapState(['today', 'todoIntro']),
    },
    mounted() {
        this.checkIntro();
    },
    data() {
        return {
            items: ['TODO', 'DOING', 'DONE'],
            step: [],
        };
    },
    methods: {
        async checkIntro() {
            if (!this.todoIntro) {
                await this.setOptions();
                await startIntro(this.step);
                await this.$store.commit('toggleState', 'TodoList');
            }
        },
        setOptions() {
            this.step = [
                {
                    title: 'TodoList',
                    intro: '나의 TodoList를 확인할 수 있는 페이지 입니다.',
                },
                {
                    element: document.querySelector('#step1'),
                    title: 'TodoList',
                    intro: '나의 TodoList가 달력으로 표시됩니다.',
                },
                {
                    element: document.querySelector('#step2'),
                    title: 'TodoList',
                    intro: '나의 TodoList를 확인할 수 있는 목록입니다.',
                },
            ];
        },
    },
};
</script>

<style scoped></style>
