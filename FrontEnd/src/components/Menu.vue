<template>
    <nav class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
        <label class="menu-open-button" for="menu-open">
            <span class="lines line-1"></span>
            <span class="lines line-2"></span>
            <span class="lines line-3"></span>
        </label>

        <div class="menu-item toggleDarkBtn" @click="changeDark">
            <v-icon>{{ curMode }}</v-icon> Dark Mode
        </div>
        <div class="menu-item orange" @click="goVisit">
            <v-icon>mdi-chart-line</v-icon> Visit Chart
        </div>
        <div class="menu-item purple" @click="goMain"><v-icon>mdi-github</v-icon> Main Page</div>
        <div class="menu-item blue" @click="goTodoList">
            <v-icon>mdi-calendar-month</v-icon> Todo List
        </div>
        <div class="menu-item yellow" @click="goMain">
            <v-icon>E2</v-icon>
        </div>
    </nav>
</template>
<script>
import { moveMain, moveVisit, moveTodoList } from '@/api/move.js';
export default {
    data() {
        return {
            curMode: '',
        };
    },
    created() {},
    mounted() {
        this.checkDark();
    },
    methods: {
        checkDark() {
            // 로컬 스토리지에 변수 값 확인.
            const theme = localStorage.getItem('dark_theme');
            if (theme) {
                // 존재하는 경우.
                if (theme === 'true') {
                    this.$vuetify.theme.dark = true;
                    this.curMode = 'mdi-weather-sunny';
                } else {
                    this.$vuetify.theme.dark = false;
                    this.curMode = 'mdi-weather-night';
                }
            }
            // 존재하지 않는 경우 시스템에서 다크모드를 활성화 했는지 확인 후 설정.
            else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.$vuetify.theme.dark = true;
                localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
            }
        },
        changeDark() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());

            if (this.$vuetify.theme.dark) {
                this.curMode = 'mdi-weather-sunny';
            } else {
                this.curMode = 'mdi-weather-night';
            }
        },
        goVisit() {
            moveVisit();
        },
        goMain() {
            moveMain();
        },
        goTodoList() {
            moveTodoList();
        },
    },
};
</script>
<style scoped>
body {
    padding: 0;
    margin: 0;
    background: #596778;
    color: #eeeeee;
    text-align: center;
    font-family: 'Lato', sans-serif;
}

@media screen and (max-width: 700px) {
    body {
        padding: 170px 0 0 0;
        width: 100%;
    }
}

a {
    color: inherit;
}

.menu-item,
.menu-open-button {
    background: #eeeeee;
    border-radius: 30px;
    width: 180px;
    height: 80px;
    line-height: 80px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 200ms;
    transition: -webkit-transform ease-out 200ms;
    transition: transform ease-out 200ms;
    transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu-open {
    display: none;
}

.lines {
    width: 25px;
    height: 3px;
    background: #596778;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -1.5px;
    -webkit-transition: -webkit-transform 200ms;
    transition: -webkit-transform 200ms;
    transition: transform 200ms;
    transition: transform 200ms, -webkit-transform 200ms;
}

.line-1 {
    -webkit-transform: translate3d(0, -8px, 0);
    transform: translate3d(0, -8px, 0);
}

.line-2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.line-3 {
    -webkit-transform: translate3d(0, 8px, 0);
    transform: translate3d(0, 8px, 0);
}

.menu-open:checked + .menu-open-button .line-1 {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open:checked + .menu-open-button .line-2 {
    -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
    transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open:checked + .menu-open-button .line-3 {
    -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
    transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu {
    margin: auto;
    position: fixed;
    bottom: 10px;
    right: 155px;
    width: 80px;
    height: 80px;
    text-align: center;
    box-sizing: border-box;
    font-size: 26px;
}

.menu-item {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
    display: inline-block;
    cursor: pointer;
}

.menu-open-button {
    z-index: 2;
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

/*버튼커짐 */
.menu-open-button:hover {
    -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

/*메뉴버튼이 클릭상태인 메뉴버튼인경우 */
.menu-open:checked + .menu-open-button {
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
    transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.menu-open:checked ~ .menu-item {
    -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.menu-open:checked ~ .menu-item:nth-child(3) {
    transition-duration: 180ms;
    -webkit-transition-duration: 180ms;
    -webkit-transform: translate3d(0px, -80px, 0);
    transform: translate3d(0px, -80px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(4) {
    transition-duration: 280ms;
    -webkit-transition-duration: 280ms;
    -webkit-transform: translate3d(0px, -170px, 0);
    transform: translate3d(0px, -170px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(5) {
    transition-duration: 380ms;
    -webkit-transition-duration: 380ms;
    -webkit-transform: translate3d(0px, -260px, 0);
    transform: translate3d(0px, -260px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(6) {
    transition-duration: 380ms;
    -webkit-transition-duration: 380ms;
    -webkit-transform: translate3d(0px, -350px, 0);
    transform: translate3d(0px, -350px, 0);
}
.menu-open:checked ~ .menu-item:nth-child(7) {
    transition-duration: 380ms;
    -webkit-transition-duration: 380ms;
    -webkit-transform: translate3d(0px, -440px, 0);
    transform: translate3d(0px, -440px, 0);
}
.toggleDarkBtn {
    background-color: #696969;
}

.purple {
    background-color: #c49cde;
}

.orange {
    background-color: #fc913a;
}

.menu-item .v-icon {
    font-size: 36px;
    color: #fff;
}
.menu-item {
    font-size: 24px;
}
</style>
