import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/index'
import common from '@/assets/js/common.js'
import Paginate from "vuejs-paginate-next"
import PrimeVue from 'primevue/config'
import axios from '@/axios'
import piniaStore from '@/store'
import piniaPersistPlugin from '@/plugins/piniaPersist'
import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(piniaPersistPlugin)

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(routes).use(common).use(PrimeVue).use(piniaStore).use(pinia)
app.component('paginate', Paginate)
app.mount('#app')

window.Kakao.init('220487c658165a7581e93ad39a54d80b')