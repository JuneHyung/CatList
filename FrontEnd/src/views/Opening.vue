<template>
    <div class="bgBox blinking">
        <div class="coverBox card-demo">
            <div id="step1" class="titleBox" @click="goMain()">
                <h1 class="openingTitle card-demo-link">Let's Go</h1>
                <p id="step2">Search Cats</p>
            </div>
        </div>
    </div>
</template>
<script>
import { moveMain } from '@/api/move.js';
import { startIntro } from '@/api/util.js';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            step: [],
        };
    },
    computed: {
        ...mapState(['openingIntro']),
    },
    mounted() {
        this.checkIntro();
    },
    methods: {
        goMain() {
            moveMain();
        },
        async checkIntro() {
            if (!this.openingIntro) {
                await this.setOptions();
                await startIntro(this.step);
                await this.$store.commit('toggleState', 'Opening');
            }
        },
        setOptions() {
            this.step = [
                {
                    title: 'Welcome',
                    intro: 'Hello Everyone',
                    step: 0,
                },
                {
                    element: document.querySelector('#step1'),
                    title: 'Opening',
                    intro: '안녕하세요! <br/>글자를 클릭하면 고양이 페이지로 이동합니다.',
                },
                {
                    element: document.querySelector('#step2'),
                    title: 'Opening',
                    intro: '클릭해보세요!',
                },
            ];
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
