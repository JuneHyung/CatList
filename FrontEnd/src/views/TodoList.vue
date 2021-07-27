<template>
    <v-container>
        <p>todolist가 들어갈 곳</p>
        <v-row class="fill-height" style="margin-top: 10px">
            <calendar :items="items" :data-intro="introM[0]"></calendar>
            <td-list :items="items" :data-intro="introM[1]"></td-list>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Calendar from '@/components/Calendar.vue';
import TdList from '@/components/TdList.vue';
import { message } from '@/api/todo.js';
import { startIntro } from '@/api/util.js';
export default {
    components: {
        Calendar,
        TdList,
    },
    computed: {
        ...mapState(['today']),
    },
    created() {
        this.introM = message;
    },
    mounted() {
        startIntro();
    },
    data() {
        return {
            items: ['TODO', 'DOING', 'DONE'],
            introM: {},
        };
    },
};
</script>

<style scoped></style>
