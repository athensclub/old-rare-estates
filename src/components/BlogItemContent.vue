<template>
  <v-card color="black" dark>
    <v-card-title
      class="mt-0 pt-0 text-h4"
      :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }"
    >
      <div class="blog-title">
        {{ title }}
      </div>
    </v-card-title>

    <v-card-subtitle
      class="mt-3 mb-0 pb-0 text-subtitle1"
      :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }"
    >
      {{ date }}
    </v-card-subtitle>

    <v-card-text :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }">
      <VueClamp :max-lines="10" class="mt-2" style="color: white;" autoresize>
        {{ text }}
        <template #after>
          <a :href="url" class="blog-link" target="_blank">
            Read more
          </a>
        </template>
      </VueClamp>
    </v-card-text>
  </v-card>
</template>

<script>
import VueClamp from "vue-clamp";
export default {
  props: {
    title: String,
    date: String,
    text: String,
    url: String,
  },
  components: { VueClamp },
};
</script>

<style scoped>
.blog-link {
  text-decoration: none;
  color: #4d4fe8;
}
</style>
