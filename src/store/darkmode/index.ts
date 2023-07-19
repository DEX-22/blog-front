
import { defineStore } from 'pinia'

export const darkModeStore = defineStore({
    id:'darkMode',
    state: () => ({
      darkMode: false,
    }),
    getters: {
      isDarkModeOn: (state) => state.darkMode,
    },
    actions: {
      toggle() {
        console.log('asdasd');
        
        this.darkMode = !this.darkMode;
      },
    },
  })