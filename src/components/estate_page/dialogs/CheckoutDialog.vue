<template>
  <v-dialog v-model="dialog" width="380px">
    <template #activator="{ on, attrs }">
      <v-btn
        style="width: 100%"
        class="mt-10"
        color="#4D4FE8"
        v-on="on"
        v-bind="attrs"
        :disabled="activatorDisabled"
        large
        dark
        rounded
      >
        PROCEED
      </v-btn>
    </template>

    <v-container class="buy-estate-dialog rounded-xl" dark>
      <v-col>
        <v-row class="ma-1" justify="end">
          <v-btn color="#8e8c8c" @click="dialog = false" icon outlined>X</v-btn>
        </v-row>

        <h2 style="color: white;">
          Checkout
        </h2>

        <div class="mt-4" style="color: #808080;">
          You are about to purchase
          <span style="color: white;">{{ estateName }}</span>
          from
          <span style="color: white;">{{ ownerName }}</span>
        </div>

        <div class="mt-10" style="color: #808080;">
          Service fee
          <span class="ml-3" style="color: white;">{{ serviceFee }}%</span>
          <br />
          You will pay
          <span class="ml-2" style="color: #4d4fe8"
            >Ξ {{ (price * serviceFee) / 100 }}</span
          >
        </div>
      </v-col>

      <v-row class="ma-3" justify="center">
        <PurchaseDialog
          :estateName="estateName"
          :ownerName="ownerName"
          :price="price"
          :serviceFee="serviceFee"
          :image="image"
          @purchase-dialog-opened="dialog = false"
        ></PurchaseDialog>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script>
import PurchaseDialog from "./PurchaseDialog.vue";
export default {
  data: () => ({
    dialog: false,
  }),
  watch: {
    dialog: function(newVal) {
      if (newVal) this.$emit("checkout-dialog-opened");
    },
  },
  props: {
    estateName: String,
    ownerName: String,
    serviceFee: Number,
    price: Number,
    image: String,
    activatorDisabled: Boolean,
  },
  components: {
    PurchaseDialog,
  },
};
</script>

<style></style>
