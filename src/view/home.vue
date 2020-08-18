<!--  -->
<template>
<div>
    <h2>欢迎来到贝壳网站...</h2>
    <div>
        <router-link to="/home/homeul">体育新闻</router-link>|

        <router-link to="/home/homeli">娱乐新闻</router-link>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {

}
</script>
<style scoped>
</style>