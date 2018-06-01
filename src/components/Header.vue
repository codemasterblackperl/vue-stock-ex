<template>
  <v-toolbar app>
    <v-toolbar-title>Stock Trader</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat
             to="/">Home</v-btn>
      <v-btn flat
             to="/portfolio">Portfolio</v-btn>
      <v-btn flat
             to="/stocks">
        Stocks
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat
             @click="endDay">End Day</v-btn>
      <v-menu offset-y>
        <v-btn slot="activator"
               flat>Load & Save</v-btn>
        <v-list>
          <v-list-tile @click="load">
            <v-list-tile-title>Load</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="save">
            <v-list-tile-title>Save</v-list-tile-title>
          </v-list-tile>
          <!-- <v-list-tile v-for="item in items"
                       :key="item.key"
                       @click="callback">
            <v-list-tile-title>{{ item.key }}</v-list-tile-title>
          </v-list-tile> -->
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import {mapActions} from "vuex";

export default {
  methods:{
    ...mapActions("StocksStore",["randomizeStocks"]),
    endDay(){
      this.randomizeStocks();
    },
    load(){
      alert('load clicked');
    },
    save(){
      alert('save clicked');
    }
  }
}
</script>
