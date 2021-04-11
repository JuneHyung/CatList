<template>
    <v-container class="outerBox">
        <div id="infinite">
            <div>
                <div class="wrapBox">
                    <div class="topBox">
                        <p class="title">이미지영역</p>

                        <button class="darkBtn" @click="changeDark">다크모드</button>

                        <input type="text" placeholder="검색하고 싶은 품종을 검색해주세요." />
                    </div>

                    <v-row>
                        <div class="col-4" v-for="(cat, idx) in cats" :key="idx">
                            <v-card class="cardBox" @click="openDetail(cat)">
                                <div class="imgBox">
                                    <img
                                        :src="require(`@/assets/images/cats/${cat.profile}`)"
                                        class="profileImg"
                                    />
                                </div>
                                <div class="infoBox">
                                    <p>이름 : {{ cat.cat_name }}</p>
                                    <p>품종 : {{ cat.kind }}</p>
                                    <p>{{ cat.description }}</p>
                                </div>
                            </v-card>
                        </div>
                    </v-row>

                    <v-row class="more"> </v-row>
                    <catsDetail
                        :detailDialog="detailDialog"
                        @closeDetail="closeDetail"
                    ></catsDetail>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import http from '@/util/http-common';
import CatsDetail from '@/components/CatsDetail';
import { mapState } from 'vuex';
// import {scrolling} from '../api/scrolling';
export default {
    name: 'Main',
    components: {
        catsDetail: CatsDetail,
    },
    computed: {
        ...mapState(['catsDetail']),
    },

    data() {
        return {
            cats: [],
            start: 0,
            limit: 6,
            detailDialog: false,
            isLoading: true,
            darkDialog: false,
        };
    },
    created() {
        this.append_list();
        window.addEventListener('scroll', this.scroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scroll);
    },
    mounted() {
        this.isLoading = false;

        // 로컬 스토리지에 변수 값 확인.
        const theme = localStorage.getItem('dark_theme');
        if (theme) {
            // 존재하는 경우.
            if (theme === 'true') {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        }
        // 존재하지 않는 경우 시스템에서 다크모드를 활성화 했는지 확인 후 설정.
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
        }
    },
    methods: {
        scroll() {
            let scrolledToBottom =
                document.documentElement.scrollTop + window.innerHeight ==
                document.documentElement.offsetHeight;
            console.log(this.isLoading);

            if (this.isLoading && scrolledToBottom) {
                this.isLoading = true;
                setTimeout(this.append_list, 1000);
            }
        },
        append_list() {
            http.get(`/cats/${this.start}`)
                .then((response) => {
                    if (response.data.length >= 6) {
                        this.isLoading = true;
                        for (var i = 0; i < 6; i++) {
                            this.cats.push({
                                cat_name: response.data[i].cat_name,
                                cat_num: response.data[i].cat_num,
                                create_date: response.data[i].create_date,
                                description: response.data[i].description,
                                kind: response.data[i].kind,
                                profile: response.data[i].profile,
                            });
                        }
                        this.start += this.limit;
                        console.log(this.start);
                    } else {
                        for (i = 0; i < response.data.length; i++) {
                            this.cats.push({
                                cat_name: response.data[i].cat_name,
                                cat_num: response.data[i].cat_num,
                                create_date: response.data[i].create_date,
                                description: response.data[i].description,
                                kind: response.data[i].kind,
                                profile: response.data[i].profile,
                            });
                        }
                        this.start += this.limit;
                        console.log(this.start);
                        this.isLoading = false;
                    }
                })
                .catch(() => {
                    alert('정보를 받아오는데 실패!');
                });
        },
        openDetail(cat) {
            this.$store.commit('setCatsDetail', cat);
            this.detailDialog = true;
        },
        closeDetail(detailDialog) {
            console.log('이전 : ' + detailDialog);
            this.detailDialog = !detailDialog;
            console.log('즤금 : ' + this.detailDialog);
        },
        changeDark() {
            // console.log('dark : ' + this.$vuetify.theme.dark.toString());

            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
        },
    },
};
</script>

<style>
@import '../assets/css/cat.css';
</style>
