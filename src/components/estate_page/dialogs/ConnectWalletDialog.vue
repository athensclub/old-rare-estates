<template>
  <v-dialog v-model="dialog" width="420px" style="z-index: 2000">
    <template #activator="{ on, attrs }">
      <v-btn color="#4D4FE8" v-on="on" v-bind="attrs" dark rounded>
        BUY ESTATE
      </v-btn>
    </template>

    <v-container class="buy-estate-dialog rounded-xl" dark>
      <v-col align="center">
        <img width="30%" src="../../../assets/ethImageLarge.png" />

        <v-row justify="center">
          <h2 class="font-weight-light mr-4" style="color: white">CONNECT</h2>
          <h2 class="font-weight-medium connect-wallet-gradient-text">
            WALLET
          </h2>
        </v-row>

        <v-row class="mx-1 mt-10 mb-10" justify="center">
          <v-btn
            class="rounded-lg mr-4"
            color="#5a5758"
            width="170px"
            height="200px"
            @click="connectWallet"
            outlined
          >
            <v-col>
              <img width="50%" src="../../../assets/metamask.png" />
              <div class="font-weight-light" style="color: white">METAMASK</div>
            </v-col>
          </v-btn>

          <v-btn
            class="rounded-lg"
            color="#5a5758"
            width="170px"
            height="200px"
            outlined
          >
            <img width="50%" src="../../../assets/trustwallet.png" />
          </v-btn>
        </v-row>

        <span class="" style="color: white;">
          Connect with one of the available wallet providers or create a new
          wallet.
          <a
            style="color: #4d4fe8"
            href="https://www.example.com"
            target="_blank"
            >What is a wallet?</a
          >
        </span>
      </v-col>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    async connectWallet() {
    },
  },
};
</script>

<style scoped>
.connect-wallet-gradient-text {
  background: linear-gradient(#4d4fe8, #b352ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.terms-of-service-link {
  text-decoration: none;
  color: #4d4fe8;
}
</style>
