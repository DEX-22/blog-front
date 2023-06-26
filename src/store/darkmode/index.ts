
import { defineStore } from 'pinia'

export const darkModeStore = defineStore('darkMode', {
    state: () => ({
      darkMode: false,
    }),
    getters: {
      isDarkModeOn: (state) => state.darkMode,
    },
    actions: {
      toggle() {
        this.darkMode = !this.darkMode;
      },
    },
  })