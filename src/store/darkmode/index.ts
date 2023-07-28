
import { defineStore } from 'pinia'

export const darkModeStore = defineStore({
    id:'darkMode',
    state: () => ({
      theme: 'light',
      themes:{
        light: 'light',
        dark: 'dark'
      },
    }),
    getters: {
      isDark: (state) => state.theme == 'dark',
    },
    actions: {
      toggle() { 
        const theme = localStorage.getItem('theme') || this.theme
         for(const t in this.themes) {
          if(theme != t) this.theme = t
        }
      },
    },
  })