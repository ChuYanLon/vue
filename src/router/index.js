import Vue from "vue"
import router from "vue-router"

Vue.use(router)
export default new router({
    mode: 'history',
    routes: [
        // 默认显示页
        {
            path: "",
            redirect: () => import("../view/home.vue")
        },
        // 首页
        {
            path: "/home",
            component: () => import("../view/home.vue"),
            meta: {
                title: "首页"
            },
            children: [
                // 默认显示页
                {
                    path: "",
                    component: () => import("../view/home/homeul.vue")
                },
                // 体育新闻
                {
                    path: "homeul",
                    component: () => import("../view/home/homeul.vue")
                },
                // 娱乐新闻
                {
                    path: "homeli",
                    component: () => import("../view/home/homeli.vue")
                }
            ],
            beforeEnter:(to,form,next)=>{
                console.log("------------");
                next()
            }
        },
        // 说一说
        {
            path: "/pik",
            component: () => import("../view/pik.vue"),
            meta: {
                title: "说一说"
            }
        },
        // 个人页
        {
            path: "/use/",
            component: () => import("../view/use.vue"),
            meta: {
                title: "个人页"
            }
        }
    ]
})





