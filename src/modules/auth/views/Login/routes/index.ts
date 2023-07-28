import Login from '@/modules/auth/views/Login/Login.vue'

import { userStore } from '@/modules/user/store'


export default { 
    path: 'login', 
    name: 'login', 
    component: Login ,
    beforeEnter : (to, from) => {

      const user = userStore()
      const token = localStorage.getItem('token')
      
      if(['register','login'].some(route => to.name == route))
        return true
      else
        return token ? true : {name: 'login'}
     
      }
}