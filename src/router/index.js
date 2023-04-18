import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEach } from './hook.js'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index')
  },
]

const createRouter = () => new VueRouter({
  // scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  // base: '/app/',
  routes: constantRoutes
})

const router = createRouter()
router.beforeEach(beforeEach)
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
