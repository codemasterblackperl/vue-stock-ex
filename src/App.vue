<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
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
