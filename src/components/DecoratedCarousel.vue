<template>
  <v-col class="pa-0">
    <v-carousel v-model="selected" :show-arrows="false" :height="slideHeight" hide-delimiters>
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-img
          class="rounded-lg"
          :src="image"
          :width="slideWidth"
          :max-width="slideMaxWidth"
          :height="slideHeight"
          :aspect-ratio="aspectRatio"
          :style="{ border: hideBorders ? 'none' : '1px solid #9c9bac' }"
        ></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-row justify="center" class="mt-3">
      <v-btn
        class="mx-1"
        style="height: 12px;"
        v-for="(_, i) in images"
        :color="selected == i ? '#4D4FE8' : '#292929'"
        :key="i"
        @click="changeSelected(i)"
        rounded
        x-small
        dark
      >
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
export default {
  model: {
    prop: "selected",
    event: "carousel-selected-change",
    interval: null,
  },
  mounted() {
    if (this.cycle) {
      this.interval = setInterval(
        () =>
          this.$emit(
            "carousel-selected-change",
            (this.selected + 1) % this.images.length
          ),
        6000
      );
    }
  },
  props: {
    selected: Number,
    aspectRatio: Number,
    slideHeight: { type: String, default: undefined },
    slideWidth: { type: String, default: undefined },
    slideMaxWidth: { type: String, default: undefined },
    images: Array,
    hideBorders: Boolean,
    cycle: Boolean,
  },
  methods: {
    changeSelected(index) {
      this.$emit("carousel-selected-change", index);
    },
  },
  watch: {
    cycle(newVal) {
      if (!newVal) {
        if (this.interval != null) {
          clearInterval(this.interval);
        }
      } else if (this.interval == null) {
        this.interval = setInterval(
          () =>
            this.$emit(
              "carousel-selected-change",
              (this.selected + 1) % this.images.length
            ),
          6000
        );
      }
    },
  },
};
</script>

<style></style>
