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
                <div>
                    <character :id="'cat' + catsDetail.cat_num" :data="charc"></character>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="closeDetail"> 확인 </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapState } from 'vuex';
import Character from '@/components/Character';
export default {
    name: 'CatsDetail',
    components: {
        character: Character,
    },
    data() {
        return {
            dialog: false,
            hoverFlag: false,
        };
    },
    props: {
        detailDialog: Boolean,
        charc: Array,
    },

    computed: {
        ...mapState(['catsDetail']),
    },
    methods: {
        closeDetail() {
            this.$store.commit('deleteCatsDetail');
            this.$emit('closeDetail', this.detailDialog);
        },
    },
};
</script>
<style scoped>
.imgBox {
    height: 400px;
    margin-top: 30px;
}
</style>
