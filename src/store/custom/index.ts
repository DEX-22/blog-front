
import { defineStore } from 'pinia'

export const customStore = defineStore({
    id:'custom',
    state: () => ({
      busy: false,
    }),
    getters: {
      isBusy: (state) => state.busy,
    },
    actions: {
      toggle() {
        this.busy = !this.busy
      },
    },
  })