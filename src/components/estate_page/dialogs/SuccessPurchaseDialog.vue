<template>
  <v-dialog v-model="dialog" width="380px">
    <v-container class="buy-estate-dialog rounded-xl" dark>
      <v-col class="ma-1">
        <v-row class="ma-1" justify="end">
          <v-btn color="#8e8c8c" @click="dialog = false" icon outlined>
            X
          </v-btn>
        </v-row>

        <h2 style="color: white;">Congratulations 🎉</h2>

        <v-row class="mt-5" justify="center">
          <v-img
            :src="image"
            max-width="250"
            class="rounded-lg"
            style="border: 1px solid #9d9eb4;"
          >
          </v-img>
        </v-row>

        <div class="mt-7" style="color: #808080;">
          You have succesfully purchase
          <span style="color: white;">{{ estateName }}</span> from
          <span style="color: white;">{{ ownerName }}</span> for
          {{ price.toFixed(2) }} ETH
        </div>

        <v-btn
          class="mt-5"
          style="width: 100%;"
          color="#4D4FE8"
          @click="dialog = false"
          large
          rounded
          dark
        >
          SUCCESS
        </v-btn>
      </v-col>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  watch: {
    loadingFinished: function(newVal) {
      if (newVal) {
        this.$emit("success-purchase-dialog-opened");
        this.dialog = true;
      }
    },
  },
  props: {
    loadingFinished: Boolean,
    estateName: String,
    ownerName: String,
    serviceFee: Number,
    price: Number,
    image: String,
  },
};
</script>

<style></style>
