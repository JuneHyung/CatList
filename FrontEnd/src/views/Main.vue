<template>
    <v-container class="outerBox">
        <div id="infinite">
            <div class="wrapBox">
                <search-bar id="step1"></search-bar>
                <cats-card id="step2"></cats-card>
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
import { startIntro } from '@/api/util.js';
import { mapState } from 'vuex';
export default {
    name: 'Main',
    components: {
        searchBar: SearchBar,
        catsCard: CatsCard,
    },
    computed: {
        ...mapState(['cats', 'isLoading', 'catsLength', 'mainIntro']),
    },

    data() {
        return {
            start: 0,
            limit: 6,
            darkDialog: false,
            loadingFlag: false,
            step: [],
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
        this.checkIntro();
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
        async checkIntro() {
            if (!this.mainIntro) {
                await this.setOptions();
                await startIntro(this.step);
                await this.$store.commit('toggleState', 'Main');
            }
        },
        setOptions() {
            this.step = [
                {
                    title: '고양이 목록 페이지',
                    intro: '고양이 목록을 확인 할 수 있는 페이지 입니다.',
                },
                {
                    element: document.querySelector('#step1'),
                    title: '고양이 목록 페이지',
                    intro:
                        '검색창 입니다.<br/> 이름으로 검색이 가능하고,<br/> 마이크버튼을 클릭하면 음성으로 검색할 수 있습니다. ',
                },
                {
                    element: document.querySelector('#step2'),
                    title: '고양이 목록 페이지',
                    intro:
                        '고양이 정보가 담긴 카드입니다. <br/> 마우스를 올리면 거주지를 확인할 수 있고, 클릭 시 고양이 정보를 확인 할 수 있습니다.',
                },
            ];
        },
    },
};
</script>

<style scoped>
@import '../assets/css/cat.css';
@import '../assets/css/bg.css';
</style>
