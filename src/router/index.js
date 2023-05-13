import {createRouter, createWebHistory} from 'vue-router'
import AddDoctor from "@/pages/AddDoctor.vue";
import TimetablePage from "@/pages/TimetablePage.vue";

const routes = [
    {
        path: '/',
        component: TimetablePage
    },
    {
        path: '/add-doctor',
        component: AddDoctor
    },
    // {
    //     path: '*',
    //     redirect: NotFoundPage
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
