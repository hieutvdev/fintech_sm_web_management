import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import client_router_group from './client/index.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue'),
    },
    ...client_router_group,
  ],
})

export default router
