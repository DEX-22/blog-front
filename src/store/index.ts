import { createPinia } from 'pinia'
import { userStore } from '@/modules/user/store'

export const pinia = createPinia()

pinia.use(userStore)

export default pinia