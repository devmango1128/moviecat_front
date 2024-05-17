<template>
  <MVC_Menu />
  <MVC_Content />
</template>

<script>
import MVC_Menu from './components/MVC_Menu.vue'
import MVC_Content from './components/MVC_Content.vue'

export default {
  name: 'App',
  components: {
    MVC_Menu,
    MVC_Content
  }
}
</script>

<style>
 @import './assets/css/common.css'
</style>
