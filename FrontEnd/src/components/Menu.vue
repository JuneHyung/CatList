<template>
    <nav class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
        <label class="menu-open-button" for="menu-open">
            <span class="lines line-1"></span>
            <span class="lines line-2"></span>
            <span class="lines line-3"></span>
        </label>

        <div class="menu-item blue"></div>
        <div class="menu-item orange"></div>
        <div class="menu-item lightblue"></div>
    </nav>
</template>
<script>
export default {
    data() {
        return {};
    },
    created() {},
    methods: {},
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
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
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
    bottom: 30px;
    right: 25px;
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
}

.menu-item:hover {
    background-color: #eeeeee;
    color: #3290b1;
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
    -webkit-transform: translate3d(-90.86291px, 52.62064px, 0);
    transform: translate3d(-90.86291px, 0.62064px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(4) {
    transition-duration: 280ms;
    -webkit-transition-duration: 280ms;
    -webkit-transform: translate3d(-91.03006px, -52.33095px, 0);
    transform: translate3d(-81.03006px, -82.33095px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(5) {
    transition-duration: 380ms;
    -webkit-transition-duration: 380ms;
    -webkit-transform: translate3d(0.08361px, -104.99997px, 0);
    transform: translate3d(0.08361px, -104.99997px, 0);
}

.blue {
    background-color: #669ae1;
}
.blue:hover {
    color: #669ae1;
    text-shadow: none;
}

.green {
    background-color: #70cc72;
}
.green:hover {
    color: #70cc72;
    text-shadow: none;
}

.red {
    background-color: #fe4365;
}
.red:hover {
    color: #fe4365;
    text-shadow: none;
}

.purple {
    background-color: #c49cde;
}
.purple:hover {
    color: #c49cde;
    text-shadow: none;
}

.orange {
    background-color: #fc913a;
}
.orange:hover {
    color: #fc913a;
    text-shadow: none;
}

.lightblue {
    background-color: #62c2e4;
}
.lightblue:hover {
    color: #62c2e4;
    text-shadow: none;
}
</style>
