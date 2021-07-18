<template>
    <div class="topBox">
        <p class="title">이미지영역</p>

        <v-row style="margin: 0; padding: 0">
            <input
                type="text"
                placeholder="검색하고 싶은 품종을 검색해주세요."
                v-model="keyword"
                class="col-10"
                style="color: #a0a0a0"
            />
            <v-spacer></v-spacer>
            <v-icon @click="searchByKeyword()" class="col-1">mdi-magnify</v-icon>
            <v-icon @click="openSpeechDialog()" class="col-1">mdi-microphone</v-icon>
        </v-row>
        <v-row>
            <div
                v-for="(keyword, index) in writing"
                :key="index"
                class="keywordBox"
                @click="chooseKeyword(keyword)"
            >
                {{ keyword }}
                <div class="deleteBox" @click="deleteKeyword(index)">X</div>
            </div>
        </v-row>
    </div>
</template>

<script>
import { getAppendList, getSearching } from '@/api/main.js';
import { mapState } from 'vuex';
export default {
    name: 'SearchBar',

    computed: {
        ...mapState(['catsDetail']),
    },
    data() {
        return {
            cats: [],
            writing: [],
            keyword: '',
            isLoading: true,
            loadingFlag: false,
            idx: 0,
            sameIdx: 0,
            bgName: [
                'warmFlame',
                'nightFade',
                'springWarmth',
                'sunnyMoring',
                'rainyAshville',
                'frozenDreams',
                'dustyGrass',
                'temptingAzure',
                'heavyRain',
                'meanFruit',
                'deepBlue',
                'malibuBeach',
                'newLife',
                'morpheusDen',
                'rareWind',
                'nearMoon',
            ],
        };
    },
    methods: {
        searching() {
            getSearching(this.keyword)
                .then((response) => {
                    for (var i = 0; i < response.data.length; i++) {
                        this.cats.push({
                            cat_num: response.data[i].cat_num,
                            cat_name: response.data[i].cat_name,
                            cat_age: response.data[i].cat_age,
                            kind: response.data[i].kind,
                            description: response.data[i].description,
                            create_date: response.data[i].create_date,
                            profile: response.data[i].profile,
                            address: response.data[i].address,
                            lat: response.data[i].lat,
                            lng: response.data[i].lng,
                        });
                    }
                    if (response.data.length != 0) {
                        this.checkDuplicate();
                    }
                    this.keyword = '';
                    this.isLoading = false;
                    this.loadingFlag = false;
                })
                .catch(() => {
                    console.log('실패');
                });
        },
        checkDuplicate() {
            if (this.writing.length < 5) {
                for (var i = 0; i < this.writing.length; i++) {
                    if (this.keyword == this.writing[i]) {
                        this.writing.splice(i, 1);
                        this.idx--;
                        this.sameIdx = i;
                    }
                }
                this.writing.push(this.keyword);
                this.idx++;
            } else if (this.writing.length == 5) {
                let same = false;
                for (i = 0; i < this.writing.length; i++) {
                    if (this.keyword == this.writing[i]) {
                        this.writing.splice(i, 1);
                        this.writing.push(this.keyword);
                        this.sameIdx = i;
                        same = true;
                        break;
                    } // if
                } // for
                if (same == false) {
                    this.writing.splice(0, 1);
                    this.writing.push(this.keyword);
                    this.sameIdx = 0;
                } // if
            } //else if
        },
        append_list() {
            getAppendList(this.start)
                .then((response) => {
                    if (response.data.length >= 6) {
                        this.isLoading = true;

                        for (var i = 0; i < 6; i++) {
                            this.cats.push({
                                cat_num: response.data[i].cat_num,
                                cat_name: response.data[i].cat_name,
                                cat_age: response.data[i].cat_age,
                                kind: response.data[i].kind,
                                description: response.data[i].description,
                                create_date: response.data[i].create_date,
                                profile: response.data[i].profile,
                                address: response.data[i].address,
                                lat: response.data[i].lat,
                                lng: response.data[i].lng,
                            });
                        }

                        this.start += this.limit;
                    } else {
                        for (i = 0; i < response.data.length; i++) {
                            this.cats.push({
                                cat_num: response.data[i].cat_num,
                                cat_name: response.data[i].cat_name,
                                cat_age: response.data[i].cat_age,
                                kind: response.data[i].kind,
                                description: response.data[i].description,
                                create_date: response.data[i].create_date,
                                profile: response.data[i].profile,
                                address: response.data[i].address,
                                lat: response.data[i].lat,
                                lng: response.data[i].lng,
                            });
                        }

                        this.start += this.limit;
                        this.isLoading = false;
                    }
                    this.loadingFlag = false;
                })
                .catch(() => {
                    alert('정보를 받아오는데 실패!');
                });
        },
        searchByKeyword() {
            this.cats.splice(0);
            // this.cats = [];
            if (this.keyword == '') {
                this.start = 0;
                this.loadingFlag = true;
                setTimeout(this.append_list, 3000);
            } else {
                this.loadingFlag = true;
                setTimeout(this.searching, 3000);
                setTimeout(this.randomBackground, 3100);
            }
        },
        chooseKeyword(keyword) {
            this.keyword = keyword;
        },
        openSpeechDialog() {
            this.speechDialog = true;
        },
        deleteKeyword(index) {
            this.writing.splice(index, 1);
            this.idx--;
            this.sameIdx = index;
        },
        randomBackground() {
            let keywordBox = document.querySelector('.keywordBox:nth-child(' + this.idx + ')');
            keywordBox.className = 'keywordBox';

            let randomIdx = Math.floor(Math.random() * this.bgName.length);
            let color = this.bgName[randomIdx];
            keywordBox.classList.add(color);
        },
    },
};
</script>

<style></style>
