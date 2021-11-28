<template>
  <v-dialog v-model="dialog" width="420px" style="z-index: 2000">
    <template #activator="{ on, attrs }">
      <v-btn color="#4D4FE8" v-on="on" v-bind="attrs" dark rounded>
        BUY ESTATE
      </v-btn>
    </template>

    <v-container class="buy-estate-dialog rounded-xl" dark>
      <v-col align="center">
        <v-row class="ma-1" justify="end">
          <v-btn color="#8e8c8c" @click="dialog = false" icon outlined>X</v-btn>
        </v-row>

        <h2 style="color: white;">
          Rare Estates <br />
          Terms of Service
        </h2>

        <div class="mt-4" style="color: #808080;">
          please take a few minutes to read and understand <br />
          <a
            class="terms-of-service-link"
            href="https://www.example.com"
            target="_blank"
          >
            Rare Estates Terms of Service.
          </a>
          To continue
        </div>

        <v-checkbox
          class="ma-0 pa-0 mt-10"
          color="#4D4FE8"
          v-model="atLeastThirteen"
          dark
        >
          <template #label>
            <div style="color: white;">I am at least 13 years old</div>
          </template>
        </v-checkbox>

        <v-checkbox
          class="ma-0 pa-0"
          color="#4D4FE8"
          v-model="acceptTermsOfService"
          dark
        >
          <template #label>
            <div style="color: white;">
              I accept Rare Estate Term of Service
            </div>
          </template>
        </v-checkbox>

        <CheckoutDialog
          :estateName="estateName"
          :ownerName="ownerName"
          :price="price"
          :serviceFee="serviceFee"
          :image="image"
          :activatorDisabled="!atLeastThirteen || !acceptTermsOfService"
          @checkout-dialog-opened="dialog = false"
        />
      </v-col>
    </v-container>
  </v-dialog>
</template>

<script>
import CheckoutDialog from "./CheckoutDialog.vue";
export default {
  data: () => ({
    atLeastThirteen: false,
    acceptTermsOfService: false,
    dialog: false,
  }),
  props: {
    estateName: String,
    ownerName: String,
    serviceFee: Number,
    price: Number,
    image: String,
  },
  components: {
    CheckoutDialog,
  },
};
</script>

<style scoped>
.terms-of-service-link {
  text-decoration: none;
  color: #4d4fe8;
}
</style>
