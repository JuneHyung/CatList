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
        <speechDialog
            :speechDialog="speechDialog"
            @closeSpeechDialog="closeSpeechDialog"
        ></speechDialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SpeechDialog from '@/components/SpeechDialog';
export default {
    name: 'SearchBar',
    components: { SpeechDialog },
    computed: {
        ...mapState(['cats', 'isLoading', 'catsLength']),
    },
    props: {
        loadingFlag: Boolean,
    },
    data() {
        return {
            writing: [],
            keyword: '',
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
            speechDialog: false,
        };
    },
    methods: {
        searchByKeyword() {
            this.$store.commit('setIsLoading', false);
            this.cats.splice(0);
            if (this.keyword == '' || this.keyword == 'ALL') {
                this.keyword = 'ALL';
                this.$store.commit('setIsLoading', true);
            }
            this.$store.dispatch(`GET_SEARCHING_CAT`, this.keyword);

            this.checkDuplicate();

            this.randomBackground();
        },

        checkDuplicate() {
            let idx = this.writing.indexOf(this.keyword);
            if (this.writing.length < 5) {
                idx != -1 ? this.writing.splice(idx, 1) : this.writing.splice(idx, 0);
            } else if (this.writing.length == 5) {
                idx != -1 ? this.writing.splice(idx, 1) : this.writing.splice(0, 1);
            }
            this.writing.push(this.keyword);
            this.keyword = '';
        },

        chooseKeyword(keyword) {
            this.keyword = keyword;
        },
        openSpeechDialog() {
            this.speechDialog = true;
        },
        closeSpeechDialog(speechDialog, message) {
            this.speechDialog = !speechDialog;
            this.keyword = message;
        },
        deleteKeyword(index) {
            this.writing.splice(index, 1);
        },
        randomBackground() {
            let keywordBox = document.querySelectorAll('.keywordBox');
            keywordBox.forEach((el) => {
                el.className = 'keywordBox';
                let randomIdx = Math.floor(Math.random() * this.bgName.length);
                let color = this.bgName[randomIdx];
                el.classList.add(color);
            });
        },
    },
};
</script>

<style scoped></style>
