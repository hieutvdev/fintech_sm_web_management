import { createRouter, createWebHistory } from 'vue-router'
import client_router_group from './client/index.router'
import admin_router_group from '@/router/admin/index.router.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    ...client_router_group,
    ...admin_router_group
  ],
})

export default router
