import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/index'
import common from '@/assets/js/common.js'
import Paginate from "vuejs-paginate-next"
import PrimeVue from 'primevue/config'
import axios from '@/axios'
import pinia from '@/store'

const app = createApp(App);

app.config.globalProperties.$axios = axios

app.use(routes).use(common).use(PrimeVue).use(pinia)
app.component('paginate', Paginate)
app.mount('#app')