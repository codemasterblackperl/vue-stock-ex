<template>
  <v-flex sm6
          md4>
    <v-card>
      <v-card-title>
        {{stock.name}} &nbsp;&nbsp;
        <small>( Price: {{stock.price|currency}}, &nbsp;&nbsp; Quantity: {{stock.quantity}}
          )</small>
      </v-card-title>
      <v-card-actions>
        <v-text-field label="Quantity:"
                      :class="{danger:insufficientQuantity}"
                      type="number"
                      single-line
                      v-model.number="quantity"></v-text-field>
        <v-btn color="error"
               :disabled="quantity<1 || !Number.isInteger(quantity) || insufficientQuantity"
      
               @click="sellStock">Sell</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props:["stock"],
  data(){
    return{
      quantity:0,
    }
  },
  computed:{
    insufficientQuantity(){
      return this.quantity>this.stock.quantity;
    }
  },
  methods:{
      ...mapActions("PortfolioStore",{placeOrder:"sellStock"}),
    sellStock(){
      const order={
        stockId:this.stock.id,
        price:this.stock.price,
        quantity:this.quantity
      };
      this.placeOrder(order);
      //this.$store.dispatch("StocksStore/buyStock",order);
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