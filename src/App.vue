<template>
  <MVC_Menu />
  <MVC_Content />
  <MVC_Footer />
</template>

<script>
import MVC_Menu from './components/MVC_Menu.vue'
import MVC_Content from './components/MVC_Content.vue'
import MVC_Footer from './components/MVC_Footer.vue'

export default {
  name: 'App',
  components: {
    MVC_Menu,
    MVC_Content,
    MVC_Footer
  }
}
</script>

<style>
 @import './assets/css/common.css'
</style>
