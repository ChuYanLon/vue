import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
// 数据
let state={
   cont:20
}
// 接收动作
let actions={
   bth:({commit})=>{
       commit("bth")
   }
}
// 处理逻辑
let mutations={
    bth(state){
        state.cont--
    }
}
// 接收数据
let getters={
   cont(state){
       return state.cont
   }
}
export default new Vuex.Store({

    getters,
    state,
    actions,
    mutations,

})