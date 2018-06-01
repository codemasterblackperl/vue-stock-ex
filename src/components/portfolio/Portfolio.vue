<template>
  <v-container fluid
               style="min-height:0"
               grid-list-lg>
    <v-layout row
              wrap>
      <app-stock v-for="(stock,index) in stocks"
                 :key="index"
                 :stock="stock">
      </app-stock>
    </v-layout>
  </v-container>
</template>

<script>
import StockComp from "./Stock"
 
export default {
  components:{
    appStock:StockComp
  },
  computed:{
    stocks(){
      return this.$store.getters["PortfolioStore/stocks"];
    }
  }
}
</script>

