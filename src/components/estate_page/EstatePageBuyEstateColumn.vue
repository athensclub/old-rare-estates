<template>
  <v-row
    class="ma-0 pa-0 buy-estate-container"
    align="center"
    ref="buyEstateContainer"
  >
    <v-col class="pa-0" ref="buyEstateColumn" align="center">
      <TermsOfServiceDialog
        v-if="user"
        :estateName="name"
        :ownerName="owner"
        :serviceFee="serviceFee"
        :price="price"
        :image="image"
      >
      </TermsOfServiceDialog>

      <ConnectWalletDialog v-else />

      <h5 class="service-fee-text">
        Service fee {{ serviceFee }}%. {{ (price * serviceFee) / 100 }} ETH
      </h5>
    </v-col>
  </v-row>
</template>

<script>
import MoralisFunctions from "../../functions/MockMoralisFunctions.js";
import ConnectWalletDialog from "./dialogs/ConnectWalletDialog.vue";
import TermsOfServiceDialog from "./dialogs/TermsOfServiceDialog.vue";
export default {
  // we really should be using vuex here, there is more than one ways user can connect, and this will not get updated
  mounted() {
    MoralisFunctions.initUser().then((user) => {
      this.user = user;
    });
  },
  data: () => ({
    user: null,
  }),
  props: {
    name: String,
    owner: String,
    image: String,
    serviceFee: Number,
    price: Number,
  },
  components: {
    TermsOfServiceDialog,
    ConnectWalletDialog,
  },
};
</script>

<style scoped>
.service-fee-text {
  color: #636363;
  margin-top: 10px;
}

.buy-estate-container {
  background-color: black;
  border-top: 1px solid #7f7f7f;
}
</style>
