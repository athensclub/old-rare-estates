<template>
  <v-dialog v-model="dialog" width="380px" persistent>
    <template #activator="{ on, attrs }"
      ><v-btn
        style="width: 100%;"
        color="#4D4FE8"
        v-on="on"
        v-bind="attrs"
        large
        dark
        rounded
      >
        START
      </v-btn>
    </template>

    <!-- Somehow a scrollbar show up when progress circular indeterminate is in the container-->
    <v-container
      class="buy-estate-dialog rounded-xl"
      style="overflow-y: hidden;"
      dark
    >
      <v-col align="center">
        <v-progress-circular
          size="90"
          width="10"
          color="#4D4FE8"
          indeterminate
        ></v-progress-circular>

        <h2 class="mt-5" style="color: white;">Loading</h2>

        <div class="mt-3" style="color: #808080;">status message</div>

        <SuccessPurchaseDialog
          :estateName="estateName"
          :ownerName="ownerName"
          :price="price"
          :serviceFee="serviceFee"
          :image="image"
          :loadingFinished="finished"
          @success-purchase-dialog-opened="resetAndHide"
        ></SuccessPurchaseDialog>
      </v-col>
    </v-container>
  </v-dialog>
</template>

<script>
import SuccessPurchaseDialog from "./SuccessPurchaseDialog.vue";
export default {
  data: () => ({
    dialog: false,
    finished: false,
  }),
  watch: {
    dialog: function(newVal) {
      if (newVal) {
        this.finished = false;
        setTimeout(() => (this.finished = true), 3000);
        this.$emit("loading-dialog-opened");
      }
    },
  },
  methods: {
    resetAndHide(){
      this.finished = false;
      this.dialog = false;
    }
  },
  props: {
    estateName: String,
    ownerName: String,
    serviceFee: Number,
    price: Number,
    image: String,
  },
  components: {
    SuccessPurchaseDialog,
  },
};
</script>

<style></style>
