import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.css'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'


// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
// app.use(Buefy)
app.use(router)
app.mount('#app')
