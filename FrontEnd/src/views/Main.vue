<template>
    <v-container class="outerBox">
        <div id="infinite">
            <div class="wrapBox">
                <search-bar></search-bar>
                <cats-card></cats-card>
                <div class="loadingBox" v-if="loadingFlag">
                    <v-img
                        :src="require(`@/assets/images/Loading_cat.gif`)"
                        class="loading"
                    ></v-img>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=your api key"></script>
<script>
import SearchBar from '@/components/SearchBar.vue';
import CatsCard from '@/components/CatsCard.vue';
import { mapState } from 'vuex';
export default {
    name: 'Main',
    components: {
        searchBar: SearchBar,
        catsCard: CatsCard,
    },
    computed: {
        ...mapState(['cats', 'isLoading', 'catsLength']),
    },

    data() {
        return {
            start: 0,
            limit: 6,
            darkDialog: false,
            loadingFlag: false,
        };
    },
    created() {
        this.$store.commit('setIsLoading', true);
        window.addEventListener('scroll', this.scroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scroll);
    },
    mounted() {
        this.append_list();
        this.loadingFlag = false;
    },
    methods: {
        scroll() {
            let scrolledToBottom =
                document.documentElement.scrollTop + window.innerHeight ==
                document.documentElement.offsetHeight;

            if (this.isLoading && scrolledToBottom) {
                this.$store.commit('setIsLoading', true);
                this.loadingFlag = true;
                setTimeout(this.append_list, 3000);
            }
        },
        append_list() {
            this.$store.dispatch('GET_APPEND_LIST', this.start);

            if (this.start == 0 || this.catsLength >= 6) {
                this.start += this.limit;
                this.$store.commit('setIsLoading', true);
            } else if (this.start != 0 && this.catsLength < 6) {
                this.$store.commit('setIsLoading', false);
            }
            this.loadingFlag = false;
        },
    },
};
</script>

<style scoped>
@import '../assets/css/cat.css';
@import '../assets/css/bg.css';
</style>
