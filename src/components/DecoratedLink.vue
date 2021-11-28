<template>
  <router-link
    :to="to"
    v-slot="{ isActive }"
    class="mx-3 decorated-link text-subtitle1"
    custom
  >
    <router-link
      :to="to"
      :class="{
        'font-weight-medium': isActive,
        'font-weight-light': !isActive,
      }"
    >
      {{ text }}
    </router-link>
  </router-link>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
};
</script>

<style scoped>
.decorated-link {
  text-decoration: none;
  color: white;
}

.decorated-link:not(:hover):not(.router-link-active) {
  opacity: 0.95;
}
</style>
