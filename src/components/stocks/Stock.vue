<template>
  <v-flex sm6
          md4>
    <v-card class="cardStyle">
      <v-card-title>
        {{stock.name}} &nbsp;&nbsp;
        <small>Price: {{stock.price|currency}}</small>
      </v-card-title>
      <v-card-actions>
        <v-text-field label="Quantity:"
                      :class="{danger:insufficientFund}"
                      type="number"
                      single-line
                      v-model.number="quantity"></v-text-field>
        <v-btn color="success"
               :disabled="quantity<1 || !Number.isInteger(quantity) || insufficientFund"
      
               @click="buyStock">Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props:["stock"],
  data(){
    return{
      quantity:0,
    }
  },
  computed:{
    funds(){
      return this.$store.getters["PortfolioStore/funds"];
    },
    insufficientFund(){
      return this.quantity*this.stock.price > this.funds;
    }
  },
  methods:{
    buyStock(){

      const order={
        stockId:this.stock.id,
        price:this.stock.price,
        quantity:this.quantity
      };

      this.$store.dispatch("StocksStore/buyStock",order);
      //after order
      this.quantity=0;
    }
  }
}
</script>


<style scoped>
.cardStyle {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.danger {
  border: 1px solid red;
}
</style>

