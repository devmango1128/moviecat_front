import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes/index';
import common from '@/assets/js/common.js'
import Paginate from "vuejs-paginate-next";

const app = createApp(App);

app.use(routes).use(common)
app.component('paginate', Paginate)
app.mount('#app')

