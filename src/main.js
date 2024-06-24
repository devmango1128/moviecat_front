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
import commonKeyPlugin from '@/plugins/commonKeyPlugin'

const pinia = createPinia()
pinia.use(piniaPersistPlugin)

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(routes).use(common).use(PrimeVue).use(piniaStore).use(pinia)
app.component('paginate', Paginate)
app.use(commonKeyPlugin, { movieKey: 'ce3c14201d46e0178b6030f2bc1b4b63' });
app.mount('#app')

window.Kakao.init('8061d75106eafc0eda6889aeac2dadc3')