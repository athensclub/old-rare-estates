<template>
  <v-col class="mt-2 pb-0" style="overflow-x: hidden">
    <v-row class="flex-nowrap">
      <h1
        class="mx-2"
        :class="{
          'text-h4': !$vuetify.breakpoint.smAndDown,
          'text-h5': $vuetify.breakpoint.smAndDown,
        }"
      >
        {{ name }}
      </h1>

      <v-spacer></v-spacer>

      <v-btn @click="toggleLike" class="mt-1 mx-1" outlined rounded small dark>
        <v-row align="center" justify="space-between" class="ma-1">
          <v-icon class="mr-1" small>
            {{ userLiked ? "$red-heart" : "$heart" }}
          </v-icon>

          <div>
            {{ abbreviateNumber(like) }}
          </div>
        </v-row>
      </v-btn>

      <v-btn class="mt-1 mx-1" icon dark outlined small>
        <v-icon x-small>$three-dots-horizontal</v-icon>
      </v-btn>
    </v-row>

    <v-row class="ml-0 mt-5 mb-2">
      <v-btn
        v-for="(tag, i) in tags"
        :key="i"
        class=" text-none text-subtitle-1"
        :to="`/search?tag=${tag}`"
        dark
        rounded
        outlined
        small
      >
        {{ tag }}
      </v-btn>
    </v-row>

    <h3
      class="price-text"
      :class="{
        'mt-4': !$vuetify.breakpoint.smAndDown,
        'mt-3': $vuetify.breakpoint.smAndDown,
      }"
      style="color: #4d4fe8"
    >
      {{ price.toFixed(2) + " ETH" }}
    </h3>

    <VueClamp :max-lines="3" class="mt-2" style="color: white" autoresize>
      {{ description }}
      <template #after="{ toggle, expanded, clamped }">
        <a v-if="expanded || clamped" @click="toggle" style="color: #4d4fe8">
          {{ clamped ? "Read more" : "Show less" }}
        </a>
      </template>
    </VueClamp>

    <template v-if="$vuetify.breakpoint.smAndDown">
      <EstatePageUserButton title="Creator" to="/user/1" userName="Someone" />
      <EstatePageUserButton title="Owner" to="/user/1" userName="Somebody" />
    </template>
    <v-row v-else class="pa-0 mt-1 ml-1">
      <EstatePageUserButton title="Creator" to="/user/1" userName="Someone" />
      <EstatePageUserButton title="Owner" to="/user/1" userName="Somebody" />
    </v-row>

    <div
      v-if="$vuetify.breakpoint.smAndDown"
      class="mt-12 estate-info-divider"
    ></div>

    <h4
      class="ml-1"
      :class="{
        'mt-16': !$vuetify.breakpoint.smAndDown,
        'mt-6': $vuetify.breakpoint.smAndDown,
      }"
      style="color: #b3b3b3"
    >
      History
    </h4>
  </v-col>
</template>

<script>
import EstatePageUserButton from "./EstatePageUserButton.vue";
import abbreviateNumberUtil from "../../util/abbreviateNumber.js";
import VueClamp from "vue-clamp";
export default {
  props: {
    name: String,
    owner: String,
    creator: String,
    description: String,
    like: Number,
    price: Number,
    tags: Array,
    userLiked: Boolean,
  },
  methods: {
    toggleLike() {
      this.$emit("toggle-like");
    },
    routeToOwner() {
      this.$router.push(`/user/1`); // change to the owner id here when the API is ready.
    },
    routeToCreator() {
      this.$router.push(`/user/1`); // change to the owner id here when the API is ready.
    },
    abbreviateNumber(value) {
      return abbreviateNumberUtil(value);
    },
  },
  components: {
    VueClamp,
    EstatePageUserButton,
  },
};
</script>

<style scoped>
.estate-info-divider {
  width: 100%;
  border-bottom: 1px solid #909090;
}

.price-text {
  background: linear-gradient(#4d4fe8, #b352ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
