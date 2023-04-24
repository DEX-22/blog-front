import Login from '@/modules/auth/views/Login/Login.vue'



export default { 
    path: 'login', 
    name: 'login', 
    component: Login ,
    beforeEnter : (to, from, next) => {
        const item = localStorage.getItem('token')
        if (item) {
          // El elemento existe en el localStorage
          next({name:'home'})
        } else {
          // El elemento no existe en el localStorage
          next()
        }
      }
}