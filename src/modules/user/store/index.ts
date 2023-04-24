import { defineStore } from 'pinia'
import LoginService from '@/modules/auth/views/Login/service'
import type {UserState} from '@/interfaces/login/index'

export const userStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
    login:{
      user_name: '',
      password: '',
    }
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async login(this: any, credentials:LoginState) {
      const {user_name,password} = credentials

      this.user_name = user_name
      this.password = password
      
      const login = await LoginService.index(credentials)

      if(login.hasErrors){
          return login
      }
        

      this.token = login.data.token
      localStorage.setItem('token', this.token)

      return login
    },
    logout(this: any) {
      this.token = ''
      localStorage.removeItem('token')
    },
  },
})
