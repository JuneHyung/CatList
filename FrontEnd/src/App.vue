<template>
    <v-app>
        <router-view></router-view>
        <navmenu></navmenu>
    </v-app>
</template>

<script>
import Menu from '@/components/Menu';
export default {
    name: 'App',
    components: {
        navmenu: Menu,
    },
};
</script>
<style>
@import './assets/css/reset.css';
</style>
