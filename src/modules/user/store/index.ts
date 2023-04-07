import { defineStore } from 'pinia'

interface UserState {
  token: string
}

export const userStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    login(this: any, token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    logout(this: any) {
      this.token = ''
      localStorage.removeItem('token')
    },
  },
})
