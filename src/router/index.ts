import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login/login.vue'
import localeCache from '@/utils/catch'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localeCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router
