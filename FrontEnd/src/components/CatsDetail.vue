<template>
    <v-dialog v-model="detailDialog" persistent max-width="500px">
        <v-card>
            <v-card-title class="headline">
                {{ catsDetail.cat_name }}
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-spacer></v-spacer>
                    <p>작성일 : {{ catsDetail.create_date }}</p>
                </v-row>
                <div class="imgBox">
                    <img
                        v-if="detailDialog"
                        :src="require(`@/assets/images/cats/${catsDetail.profile}`)"
                        alt="냥이사진"
                        class="profileImg"
                    />
                </div>
                <p>이름 : {{ catsDetail.cat_name }}</p>
                <p>품종 : {{ catsDetail.kind }}</p>
                <p>{{ catsDetail.description }}</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="closeDetail"> 확인 </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
// import http from '@/util/http-common';
import { mapState } from 'vuex';
export default {
    name: 'CatsDetail',
    data() {
        return {
            dialog: false,
        };
    },
    props: {
        detailDialog: Boolean,
    },

    computed: {
        ...mapState(['catsDetail']),
    },

    methods: {
        closeDetail() {
            this.$emit('closeDetail', this.detailDialog);
        },
    },
};
</script>
<style scoped>
.imgBox {
    margin-top: 30px;
}
</style>
