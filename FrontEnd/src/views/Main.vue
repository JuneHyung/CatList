<template>
    <v-container class="outerBox">
        <div id="infinite">
            <div>
                <div class="wrapBox">
                    <search-bar></search-bar>
                    <v-row>
                        <div class="col-4" v-for="(cat, idx) in cats" :key="idx">
                            <v-card class="cardBox" @click="openDetail(cat)">
                                <div class="imgBox">
                                    <img
                                        :src="require(`@/assets/images/cats/${cat.profile}`)"
                                        class="profileImg"
                                    />
                                </div>
                                <div class="infoBox" @mouseover="setCenter(idx)">
                                    <p>이름 : {{ cat.cat_name }}</p>
                                    <p>품종 : {{ cat.kind }}</p>
                                    <p>{{ cat.description }}</p>
                                    <div class="mapBox">
                                        <GmapMap
                                            class="map"
                                            ref="mapRef"
                                            :center="center"
                                            :zoom="15"
                                        >
                                            <GmapMarker :position="position" />
                                        </GmapMap>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                    </v-row>
                    <div class="loadingBox" v-if="loadingFlag">
                        <v-img
                            :src="require(`@/assets/images/Loading_cat.gif`)"
                            class="loading"
                        ></v-img>
                    </div>
                    <catsDetail
                        :detailDialog="detailDialog"
                        :charc="charc"
                        @closeDetail="closeDetail"
                    ></catsDetail>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=your api key"></script>
<script>
import { getCatsCharc } from '@/api/main.js';
import SearchBar from '@/components/SearchBar.vue';
import CatsDetail from '@/components/CatsDetail';
import { mapState } from 'vuex';
export default {
    name: 'Main',
    components: {
        catsDetail: CatsDetail,
        searchBar: SearchBar,
    },
    computed: {
        ...mapState(['catsDetail', 'cats', 'isLoading', 'catsLength']),
    },

    data() {
        return {
            searchCats: {},
            start: 0,
            limit: 6,
            detailDialog: false,
            darkDialog: false,
            loadingFlag: false,
            center: {
                lat: 35.8597,
                lng: 128.611546,
            },
            // 마킹될 마커의 위치
            position: { lat: 0, lng: 0 },
            charc: [0, 0, 0, 0, 0],
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
                // this.isLoading = true;
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
        openDetail(cat) {
            this.$store.commit('setCatsDetail', cat);
            // props연습.
            getCatsCharc(cat.cat_num)
                .then(({ data }) => {
                    let charcdata = [
                        data.aggressive,
                        data.cowardice,
                        data.extrovert,
                        data.whim,
                        data.friendly,
                    ];
                    this.charc = charcdata;
                })
                .catch(() => {
                    alert('실패');
                });
            this.detailDialog = true;
        },

        closeDetail(detailDialog) {
            this.detailDialog = !detailDialog;
            this.charc.splice(0);
        },

        setCenter(idx) {
            this.position.lat = this.cats[idx].lat;
            this.position.lng = this.cats[idx].lng;
            this.center = this.position;
        },
    },
};
</script>

<style scoped>
@import '../assets/css/cat.css';
@import '../assets/css/bg.css';
</style>
