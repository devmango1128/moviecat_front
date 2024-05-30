import { createApp, ref } from 'vue';
import App from './App.vue';
import routes from './routes/index';
import common from '@/assets/js/common.js';
import Paginate from "vuejs-paginate-next";
import PrimeVue from 'primevue/config';
import axios from '@/axios'

const app = createApp(App);

const isLogin = ref(false);
app.config.globalProperties.$axios = axios
app.provide('isLogin', isLogin)

app.use(routes).use(common).use(PrimeVue)
app.component('paginate', Paginate)
app.mount('#app')


