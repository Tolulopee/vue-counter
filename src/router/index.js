import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "../views/PageNotFound.vue";
import Counter from "../views/Counter.vue";

const routes =[
    {
        path:'/counter',
        name:'Counter',
        component:Counter,
    },
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/:pathMatch(.*)*',
        name:'PageNotFound',
        component:PageNotFound,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router