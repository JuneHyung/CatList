<template>
    <v-container class="bgBox">
        <div class="titleBox">
            <h1 class="openingTitle">Let's Go</h1>
            <p @click="goMain()">Search Cats</p>
        </div>
    </v-container>
</template>
<script>
export default {
    methods: {
        goMain() {
            this.$router.push({ name: 'Main' });
        },
    },
};
</script>
<style scoped>
.bgBox {
    width: 100%;
    height: 100%;
    position: relative;
    background: url('../assets/images/openbg.jpeg');
    background-size: 100% 100%;
    background-position: center;
}
.titleBox {
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
}
.openingTitle {
    width: 100%;
    text-align: center;
    font-size: 120px;
}
.titleBox p {
    font-size: 60px;
    text-align: center;
    cursor: pointer;
}
</style>
