<template>
    <div id="app">
        <Clock msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import Clock from './components/Clock.vue';

export default {
    name: 'App',
    components: {
        Clock,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html {
    font-family: 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC',
        'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
}
</style>
