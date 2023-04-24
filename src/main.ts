import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {options} from '@/config/swalConfig'

import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue'
import router from './router'
// import VeeValidateComponents from '@/config/veevalidate/components'

import 'bulma/css/bulma.css'
import 'sweetalert2/dist/sweetalert2.min.css';
// import '@/config/veevalidate/rules'

// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'


// import './assets/main.css'

const app = createApp(App)

// app.use(Buefy)
app.use(createPinia())
app.use(router)
// app.use(VeeValidateComponents)
app.use(VueSweetalert2,options)
app.mount('#app')
