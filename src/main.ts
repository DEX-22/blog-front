import { createApp } from 'vue'
import pinia from '@/store'
 
import {options} from '@/config/swalConfig'
 
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue'
import router from './router'
 
import Navbar from "@/components/Navbar/Navbar.vue";

import '@/assets/styles/css/index.css'


// window.swal = inject("$swal");

const app = createApp(App) 
app.use(pinia)
app.use(router)
app.use(VueSweetalert2,options)
app.component('Navbar',Navbar)
app.mount('#app')

// export const auth  = authStore()