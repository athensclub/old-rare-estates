<template>
  <v-col class="pa-0 mt-4">
    <h4 style="color: #b3b3b3">{{title}}</h4>

    <v-row
      class="mt-2 ml-1"
      align="center"
      style="cursor: pointer"
      @click="routeToUser"
      v-ripple
    >
      <v-avatar color="green">Hi</v-avatar>

      <h3 class="ml-3">{{ clampCharacters(userName, 15) }}</h3>
    </v-row>
  </v-col>
</template>

<script>
import clampCharactersUtil from "../../util/clampCharacters.js";
export default {
  props: {
    to: String,
    title: String,
    userName: String,
  },
  methods: {
    routeToUser() {
      this.$router.push(this.to);
    },
    clampCharacters(value, limit) {
      return clampCharactersUtil(value, limit);
    },
  },
};
</script>

<style></style>
