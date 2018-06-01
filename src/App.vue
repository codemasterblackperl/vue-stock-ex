<template>
  <v-app>
    <app-header></app-header>
    <br>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  components:{
    appHeader:Header
  }  
}
</script>

<style>
</style>
