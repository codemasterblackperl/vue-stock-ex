<template>
  <v-container fluid
               grid-list-md>
    <v-layout row
              wrap>
      <v-flex md4
              color="light-blue lighten-4">
        <div class="cardStyle">
          <h2>Trade or View your portfolio</h2>
          <br>
          <h5>You may save and load data</h5>
          <h5>Click on 'End Day' to begin new day</h5>
          <br>
          <hr>
          <br>
          <h3>Available funds: {{funds | currency}}</h3>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed:{
    funds(){
      return this.$store.getters["PortfolioStore/funds"];
    }
  }
}
</script>



<style scoped>
.cardStyle {
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>