<template>
  <div id="app">
     <router-link to="/home">首页</router-link>|

    <router-link to="/pik">说一说</router-link>|

     <!-- <router-link :to="`/use/${id}/${name}/${eax}`">关于我</router-link> -->
<!--        <router-link :to="{path:'/use',query:{id:`${id}`,name:`${name}`,eax:`${eax}`}}">关于我</router-link>-->
      <button @click="bth">个人档案</button>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
        id:0,
        name:"褚燕龙",
        eax:"男"
    }
  },
    methods:{
      bth(){
          this.$router.push({
              path:"/use",
              query:{
                  id:this.id,
                  name:this.name,
                  eax:this.eax
              }
          })
      }
    }
}
</script>

<style>

</style>
