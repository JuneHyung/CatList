<template>
    <div class="bgBox blinking">
        <div class="coverBox">
            <div class="titleBox" @click="goMain()">
                <h1 class="openingTitle">Let's Go</h1>
                <p>Search Cats</p>
            </div>
        </div>
    </div>
</template>
<script>
import { moveMain } from '@/api/move.js';
export default {
    methods: {
        goMain() {
            moveMain();
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
.coverBox {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.titleBox {
    width: 500px;
    height: 300px;
    position: absolute;
    bottom: 20%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
    color: #fff;
    cursor: pointer;
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

.titleBox:hover h1,
.titleBox:hover p {
    transition: all 0.7s;
    color: #88bcbc;
    background-color: rgba(0, 0, 0, 0);
}
.blinking {
    -webkit-animation: blink 1.5s ease-in-out 1 alternate;
    -moz-animation: blink 1.5s ease-in-out 1 alternate;
    animation: blink 1.5s ease-in-out 1 alternate;
}
@-webkit-keyframes blink {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@-moz-keyframes blink {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes blink {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
