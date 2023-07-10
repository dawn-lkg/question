import { createRouter,createWebHashHistory } from "vue-router";

const routes=[
    {
        path:"/",
        name:"main",
        redirect:"/login"
    },{
        path:"/login",
        name:"login",
        component:()=>import('../views/login.vue')
    },{
        path:"/search",
        name:"search",
        component:()=>import('../views/search.vue')
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;