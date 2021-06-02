<template>
    <p>방문차트 페이지</p>
</template>

<script>
import http from '@/util/http-common';
export default {
    data() {
        return {
            item: [],
        };
    },
    created() {
        this.getVisitsList();
    },
    methods: {
        getVisitsList() {
            http.get(`visits/all`)
                .then(({ data }) => (this.item = data))
                .catch((error) => console.log(error));
        },
    },
};
</script>

<style></style>
