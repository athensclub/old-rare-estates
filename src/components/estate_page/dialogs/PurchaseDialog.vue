<template>
  <v-dialog v-model="dialog" width="380px">
    <template #activator="{ on, attrs }">
      <v-btn
        style="width: 100%"
        class="mt-10"
        color="#4D4FE8"
        v-on="on"
        v-bind="attrs"
        large
        dark
        rounded
      >
        PROCEED TO PAYMENT
      </v-btn>
    </template>

    <v-container class="buy-estate-dialog rounded-xl" dark>
      <v-col>
        <v-row class="ma-1" justify="end">
          <v-btn color="#8e8c8c" @click="dialog = false" icon outlined>
            X
          </v-btn>
        </v-row>

        <h2 style="color: white;">
          Follow Steps
        </h2>

        <v-row class="ma-1 mt-4">
          <v-icon>$blue-checkmark</v-icon>
          <h3 class="font-weight-light ml-3" style="color: white;">Approve</h3>
        </v-row>

        <div class="mt-2" style="color: #808080;">
          This transaction is conducted only once per transaction
        </div>

        <v-row class="ma-1 mt-3" justify="center">
          <v-btn style="width: 100%;" large disabled dark rounded>
            DONE
          </v-btn>
        </v-row>

        <v-row class="ma-1 mt-4">
          <v-icon>$blue-checkmark</v-icon>
          <h3 class="font-weight-light ml-3" style="color: white;">Purchase</h3>
        </v-row>

        <div class="mt-2" style="color: #808080;">
          Send transaction with your wallet
        </div>

        <v-row class="ma-1 mt-3" justify="center">
          <LoadingDialog
            :estateName="estateName"
            :ownerName="ownerName"
            :price="price"
            :serviceFee="serviceFee"
            :image="image"
            @loading-dialog-opened="dialog = false"
          ></LoadingDialog>
        </v-row>
      </v-col>
    </v-container>
  </v-dialog>
</template>

<script>
import LoadingDialog from "./LoadingDialog.vue";
export default {
  data: () => ({
    dialog: false,
  }),
  watch: {
    dialog: function(newVal) {
      if (newVal) this.$emit("purchase-dialog-opened");
    },
  },
  props: {
    estateName: String,
    ownerName: String,
    serviceFee: Number,
    price: Number,
    image: String,
  },
  components: {
    LoadingDialog,
  },
};
</script>

<style></style>
