<template>
  <v-col>
    <v-row
      v-for="(activity, i) in activities"
      :key="i"
      class="ma-3 pa-3 rounded-lg"
      :class="{ 'mt-10': i != 0, 'mt-4': i == 0 }"
      style="border: 1px solid #7f7f7f"
    >
      <img
        class="rounded-lg"
        :src="activity.image"
        :width="$vuetify.breakpoint.smAndDown ? '100%' : '25%'"
        height="auto"
      />
      <v-col class="pa-0 mt-2">
        <v-row class="pa-0 ml-4">
          <v-col class="pa-0">
            <h1>{{ activity.name }}</h1>
            <h2 class="font-weight-light">{{ activity.status }}</h2>
          </v-col>
        </v-row>

        <v-row
          class="pa-0 ml-4"
          :class="{ 'mt-16': $vuetify.breakpoint.smAndDown}"
          :style="{ height: $vuetify.breakpoint.smAndDown ? undefined : '60%' }"
          align="end"
        >
          <h4 style="color: #7f7f7f">{{ activity.time }}</h4>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import userApi from "../api/userApi.js";
export default {
  props: {
    id: String,
  },
  computed: {
    activities() {
      return userApi.getUserInfo({ id: this.id }).activities;
    },
  },
};
</script>

<style></style>
