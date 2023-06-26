import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {options} from '@/config/swalConfig'

import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue'
import router from './router'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import '@/assets/styles/main.scss'
import '@/utils/fs-icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon',FontAwesomeIcon)
app.use(VueSweetalert2,options)
app.mount('#app')
