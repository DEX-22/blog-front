import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {options} from '@/config/swalConfig'

import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue'
import router from './router'

import '@/assets/styles/css/index.css'

// window.swal = inject("$swal");

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2,options)
app.mount('#app')
