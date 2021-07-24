<template>
    <v-container>
        <p>todolist가 들어갈 곳</p>
        <v-row class="fill-height" style="margin-top: 10px">
            <calendar :items="items"></calendar>
            <td-list :items="items"></td-list>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Calendar from '@/components/Calendar.vue';
import TdList from '@/components/TdList.vue';
export default {
    components: {
        Calendar,
        TdList,
    },
    computed: {
        ...mapState(['today']),
    },
    data() {
        return {
            items: ['TODO', 'DOING', 'DONE'],
        };
    },
};
</script>

<style scoped></style>
