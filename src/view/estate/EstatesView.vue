<template>
  <v-row class="ma-4" style="overflow-x: hidden">
    <slot></slot>

    <EstateCard
      v-for="(estate, i) in estates"
      :userLiked="estate.userLiked"
      :image="estate.image"
      :name="estate.name"
      :creator="estate.creator"
      :price="estate.price"
      :like="estate.like"
      :id="estate.id"
      :key="i"
      v-on:toggle-like="toggleLike(i)"
    />
  </v-row>
</template>

<script>
import EstateCard from "../../components/EstateCard.vue";
export default {
  props: {
    estates: Array,
  },
  methods: {
    toggleLike(index) {
      this.estates[index].userLiked = !this.estates[index].userLiked;
    },
  },
  components: {
    EstateCard,
  },
};
</script>

<style></style>
