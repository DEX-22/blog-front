import type { UserStateI } from '@/interfaces/login'
import { defineStore } from 'pinia'
import state from './state.ts';
import getters from './getters.ts';
import actions from './actions.ts';

const id = 'user'

export const userStore = defineStore({
  id,
  state,
  getters,
  actions 
})
