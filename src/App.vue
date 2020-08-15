<template>
  <div id="app">
    初始值为: <span v-html="cont"></span>
    <button @click="bth">点击-1</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'App',
  computed: mapGetters(["cont"]),
  methods:mapActions(['bth'])
}
</script>

<style>

</style>
