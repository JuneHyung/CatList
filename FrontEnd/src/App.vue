<template>
    <v-app>
        <router-view></router-view>
        <navmenu></navmenu>
    </v-app>
</template>

<script>
import Menu from '@/components/Menu';
import http from '@/api/http.js';
import { mapState } from 'vuex';
export default {
    name: 'App',
    components: {
        navmenu: Menu,
    },
    computed: {
        ...mapState(['visits']),
    },
    data() {
        return {
            item: [],
        };
    },
    created() {
        this.getToday();
        this.getVisitsList();
    },
    methods: {
        getToday() {
            const temp = new Date();
            const year = temp.getFullYear();
            const month = temp.getMonth() + 1;
            const date = temp.getDate();
            const cur = `${year}-${month}-${date}`;
            this.today = cur;
        },
        getVisitsList() {
            http.get(`visits/all`)
                .then(({ data }) => {
                    this.item = data;
                    this.$store.commit('setVisits', data);
                    this.checkToday();
                })
                .catch((error) => console.log(error));
        },
        checkToday() {
            let count = 0;
            for (let i = 0; i < this.item.length; i++) {
                if (this.item[i].today == this.today) {
                    this.updateVisits(this.item[i].view_id, this.item[i].views);
                    break;
                }
                count++;
                // console.log('i' + this.item.length);
                if (count == this.item.length) {
                    this.createVisits();
                }
            }
        },
        createVisits() {
            let createTemp = {
                today: this.today,
                views: 1,
            };

            http.post(`visits/create`, createTemp)
                .then(() => {
                    // console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateVisits(view_id, views) {
            http.put(`visits/updateVisits`, {
                view_id: view_id,
                views: views,
            })
                .then(() => {
                    // console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
<style>
@import './assets/css/reset.css';
</style>
