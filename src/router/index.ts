import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AuthRoutes from '@/modules/auth/routes/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => { return {name:'login'} },
      children: AuthRoutes
    },
    {
      path:'/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      beforeEnter : (to, from, next) => {
        const item = localStorage.getItem('token')
        if (item) {
          // El elemento existe en el localStorage
          next()
        } else {
          // El elemento no existe en el localStorage
          next('/login')
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
