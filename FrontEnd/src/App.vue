<template>
    <v-app>
        <router-view></router-view>
        <navmenu></navmenu>
    </v-app>
</template>

<script>
import Menu from '@/components/Menu';
import { postVisits, updateVisits } from '@/api/visit.js';
import { setToday } from '@/api/util.js';
import { mapState } from 'vuex';
export default {
    name: 'App',
    components: {
        navmenu: Menu,
    },
    data() {
        return { today: '' };
    },
    computed: {
        ...mapState(['visits']),
    },
    created() {
        this.today = setToday();
        this.getVisitsList();
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
                    updateVisits(this.visits[i].view_id, this.visits[i].views)
                        .then()
                        .catch((err) => console.log(err));
                    break;
                }
                count++;
                if (count == this.visits.length) {
                    let temp = {
                        today: this.today,
                        views: 1,
                    };
                    postVisits(temp)
                        .then()
                        .catch((err) => console.log(err));
                }
            }
        },
    },
};
</script>
<style>
@import './assets/css/reset.css';
</style>
