import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login/login.vue'
import main from '../views/main/main.vue'
import localeCache from '@/utils/catch'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
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
