<template>
  <EstatesView :estates="estates">
    <v-col
      class="my-10"
      v-if="estates.length == 0"
      align="center"
      justify="center"
    >
      <h2 class="font-weight-medium">No items found</h2>

      <h4 class="font-weight-light mt-4" style="color: #808080;">
        Come back soon! Or try to browse <br />
        something for you on our marketplace
      </h4>

      <v-btn color="#4D4FE8" class="mt-4" to="/explore" rounded dark>
        Browse Marketplace
      </v-btn>
    </v-col>
  </EstatesView>
</template>

<script>
import userApi from "../../api/userApi.js";
import EstatesView from "./EstatesView.vue";
export default {
  props: {
    id: String,
  },
  components: {
    EstatesView,
  },
  computed: {
    estates() {
        return userApi.getUserInfo({id: this.id}).estates;
    },
  },
};
</script>

<style></style>
