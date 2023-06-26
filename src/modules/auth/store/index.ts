import state from './state.ts'
import actions from './actions.ts'
import getters from './getters.ts'

import { defineStore } from 'pinia'

const id = 'auth';


export const authStore = defineStore({
    id,state,actions,getters
})
