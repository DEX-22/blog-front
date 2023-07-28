import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/modules/auth/store'
import { userStore } from '@/modules/user/store'

// import HomeView from '../views/HomeView.vue'

import AuthRoutes from '@/modules/auth/routes/index'
import NewsRoutes from '@/modules/news/routes/index'
import PostRoutes from '@/modules/post/routes/index'
import ChatRoutes from '@/modules/chat/routes/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/:pathMatch(.*)*',
      redirect: to => { return {name:'login'} },
      
    },
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
          next({name: 'post'})
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
    },
    ChatRoutes,
    PostRoutes,
    NewsRoutes, 
  ]
})

router.beforeEach(async (to,from)=>{

  const auth =  authStore()
  const user = userStore()
  const isAuthRoute = ['register','login'].some(route => to.name == route)


  if (!isAuthRoute && !auth.isLoggedIn) {
      return { name: 'login' }
  }
  else if(isAuthRoute && auth.isLoggedIn){

      return {name: 'home'}
  }else{
    return true
  }


})

export default router
