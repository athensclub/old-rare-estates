<template>
  <v-col
    class="pa-0 mt-16 pt-2 pl-2 pr-4"
    justify="center"
    align="center"
  >
    <DecoratedCarousel
      v-model="showingImage"
      class="px-4 pt-2 mb-10"
      :slideMaxWidth="$vuetify.breakpoint.smAndDown ? '100vw' : '50vw'"
      :slideWidth="$vuetify.breakpoint.smAndDown ? '70vw' : 'auto'"
      :slideHeight="$vuetify.breakpoint.smAndDown ? 'auto' : '65vh'"
      :aspectRatio="1.35"
      :images="images"
    ></DecoratedCarousel>

    <v-btn
      v-if="!$vuetify.breakpoint.smAndDown"
      class="virtual-view-button"
      color="white"
      rounded
      dark
    >
      VIRTUAL VIEW
    </v-btn>
  </v-col>
</template>

<script>
import DecoratedCarousel from "../DecoratedCarousel.vue";
export default {
  data: () => ({ showingImage: 0 }),
  props: {
    images: Array,
  },
  components: {
    DecoratedCarousel,
  },
};
</script>

<style scoped>
.virtual-view-button {
  color: #4d4fe8;
  box-shadow: 4px 4px 4px #4d4fe8;
}
</style>
