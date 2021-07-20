<template>
    <div>
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
                            <GmapMap class="map" ref="mapRef" :center="center" :zoom="15">
                                <GmapMarker :position="position" />
                            </GmapMap>
                        </div>
                    </div>
                </v-card>
            </div>
        </v-row>
        <catsDetail
            :detailDialog="detailDialog"
            :charc="charc"
            @closeDetail="closeDetail"
        ></catsDetail>
    </div>
</template>

<script>
import { getCatsCharc } from '@/api/main.js';
import { mapState } from 'vuex';
import CatsDetail from '@/components/CatsDetail';
export default {
    components: {
        catsDetail: CatsDetail,
    },
    computed: {
        ...mapState(['cats']),
    },
    data() {
        return {
            center: {
                lat: 35.8597,
                lng: 128.611546,
            },

            // 마킹될 마커의 위치
            position: { lat: 0, lng: 0 },
            charc: [0, 0, 0, 0, 0],

            limit: 6,
            detailDialog: false,
        };
    },
    methods: {
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
                .catch((err) => {
                    console.log(err);
                });
            this.detailDialog = true;
        },

        closeDetail(detailDialog) {
            this.detailDialog = !detailDialog;
        },
        setCenter(idx) {
            this.position.lat = this.cats[idx].lat;
            this.position.lng = this.cats[idx].lng;
            this.center = this.position;
        },
    },
};
</script>

<style scoped></style>
