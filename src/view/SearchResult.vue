<template>
  <v-container class="base-page" fluid>
    <h1>
      {{
        tag
          ? `Search results for tag "${tag}"`
          : `Search results for "${query}"`
      }}
    </h1>
    <EstatesView :estates="estates" />
    <BottomFooter />
  </v-container>
</template>

<script>
import searchApi from "../api/searchApi.js";
import EstatesView from "./estate/EstatesView.vue";
import BottomFooter from "../components/BottomFooter.vue";
export default {
  props: {
    query: String,
    tag: String,
  },
  computed: {
    estates() {
      let result = searchApi.search({ query: this.query, tag: this.tag });
      return result.estates;
    },
  },
  components: {
    EstatesView,
    BottomFooter,
  },
};
</script>

<style></style>
