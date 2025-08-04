import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import MigrationPage from '../components/pages/MigrationPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/migration',
    name: 'Migration',
    component: MigrationPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
