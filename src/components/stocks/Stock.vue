<template>
  <v-flex sm6
          md4>
    <v-card>
      <v-card-title>
        Stock Name &nbsp;&nbsp;
        <small>Price: $100</small>
      </v-card-title>
      <v-card-actions>
        <v-text-field label="Quantity:"
                      type="number"
                      single-line></v-text-field>
        <v-btn color="success">Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<style scoped>
v-flex {
  padding: 20px;
}
</style>

