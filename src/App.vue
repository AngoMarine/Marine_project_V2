<template>
  <div id="app" >
    <NavBar></NavBar>
    <router-view></router-view>
    <FooterClean></FooterClean>
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import FooterClean from "./components/FooterClean.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    FooterClean,
  }
}
</script>

<style>
  @import "assets/css/style.css";

</style>
