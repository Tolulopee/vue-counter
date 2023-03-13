import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "../views/PageNotFound.vue";
import Counter from "../views/Counter.vue";
import HomePage from "../views/Home.vue";
import AboutPage from "../views/About.vue";

const routes =[
    {
        path:'/counter',
        name:'Counter',
        component:Counter,
    },
    {
        path:'/',
        name:'HomePage',
        component:HomePage,
    },
    {
        path:'/about',
        name:'AboutPage',
        component:AboutPage,

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