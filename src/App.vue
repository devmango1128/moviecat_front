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
 @import './assets/css/common.css';
 @import './assets/css/login.css';
</style>
