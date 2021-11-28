<template>
  <v-card
    dark
    color="black"
    class="mt-4 mr-6"
    @click="routeToEstate"
    :style="{ width: $vuetify.breakpoint.smAndDown ? '100%' : '30%' }"
  >
    <v-img
      class="rounded-lg"
      style="border: 1px solid #9c9bac;"
      :src="image"
      :aspect-ratio="1.35"
    ></v-img>

    <v-card-text class="ml-0 pl-0 mt-3 pt-0 font-weight-light">
      <v-row class="flex-nowrap">
        <v-col>
          <h2 style="color: white;">
            {{ name }}
          </h2>

          <div style="color: white;">
            {{ "by " + creator }}
          </div>

          <div
            class="text-body-1 font-weight-medium mt-3"
            style="color: #9182ef;"
          >
            {{ price.toFixed(2) + " ETH" }}
          </div>
        </v-col>

        <v-btn class="mt-3" icon dark @click.stop="$emit('toggle-like')">
          <v-col>
            <v-icon>{{ userLiked ? "$red-heart" : "$heart" }}</v-icon>

            <div class="font-weight-light">
              {{ abbreviateNumber(like) }}
            </div>
          </v-col>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import abbreviateNumberUtil from "../util/abbreviateNumber.js";
export default {
  setup() {},
  props: {
    userLiked: Boolean,
    image: String,
    name: String,
    creator: String,
    price: Number,
    like: Number,
    id: Number,
  },
  methods: {
    abbreviateNumber(value) {
      return abbreviateNumberUtil(value);
    },
    routeToEstate() {
      this.$router.push({ path: `/estate/${this.id}` });
    },
  },
};
</script>

<style scoped></style>
