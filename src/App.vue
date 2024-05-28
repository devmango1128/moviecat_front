<template>
  <MVC_Menu />
  <router-view></router-view>
  <MVC_Footer />
</template>

<script>
import MVC_Menu from './components/MVC_Menu.vue'
import MVC_Footer from './components/MVC_Footer.vue'

export default {
  name: 'App',
  components: {
    MVC_Menu,
    MVC_Footer
  }
}
</script>

<style>
 @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
 @import './assets/css/common.css';
 @import './assets/css/login.css';
 @import './assets/css/grade.css';

 @import 'primevue/resources/themes/aura-light-green/theme.css';
 @import 'primevue/resources/primevue.min.css';
 @import 'primeicons/primeicons.css';
</style>
