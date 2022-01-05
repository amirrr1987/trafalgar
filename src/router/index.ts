import { createRouter, createWebHistory } from 'vue-router'
import Trafalgar from '../pages/Trafalgar.vue'

const routes = [
    {
        path: '/',
        name: 'Trafalgar',
        component: Trafalgar,
        meta: { transition: 'bounce' },
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router