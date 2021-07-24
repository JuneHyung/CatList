<template>
    <v-app>
        <router-view></router-view>
        <navmenu></navmenu>
    </v-app>
</template>

<script>
import Menu from '@/components/Menu';
// import { postVisits, updateVisits } from '@/api/visit.js';
import { setToday } from '@/api/util.js';
import { mapState } from 'vuex';
export default {
    name: 'App',
    components: {
        navmenu: Menu,
    },
    data() {
        return {};
    },
    computed: {
        ...mapState(['visits', 'today']),
    },
    async created() {
        await this.$store.commit('setToday', setToday());
        await this.getVisitsList();
    },

    methods: {
        async getVisitsList() {
            await this.$store.dispatch('GET_ALL_VISITS');
            await this.checkToday();
        },
        checkToday() {
            let count = 0;
            for (let i = 0; i < this.visits.length; i++) {
                if (this.visits[i].today == this.today) {
                    let visits = {
                        id: this.visits[i].view_id,
                        views: this.visits[i].views,
                    };
                    this.$store.dispatch('PUT_VISITS', visits);
                    break;
                }
                count++;
                if (count == this.visits.length) {
                    let visits = {
                        today: this.today,
                        views: 1,
                    };
                    this.$store.dispatch('POST_NEW_VISITS', visits);
                }
            }
        },
    },
};
</script>
<style>
@import './assets/css/reset.css';
</style>
