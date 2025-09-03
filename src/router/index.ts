import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
  { path: '/wtii', name: 'wtii', component: () => import('../pages/Wtii.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
