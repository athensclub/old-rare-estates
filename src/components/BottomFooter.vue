<template>
  <v-footer color="black" class="mt-5 mb-0 pb-0 bottom-footer" dark>
    <v-row
      class="pt-5 pb-2 flex-nowrap"
      align="center"
      style="border-top: 1px solid #7f7f7f"
    >
      Copyright © 2021 Bualoitech

      <v-spacer></v-spacer>

      <a
        href="https://www.example.com"
        target="_blank"
        class="mx-2 footer-link"
      >
        Terms of Use
      </a>

      <VerticalDivider class="mx-2"></VerticalDivider>

      <a
        href="https://www.example.com"
        target="_blank"
        class="mx-2 footer-link"
      >
        Cookie and Privacy Policy
      </a>

      <VerticalDivider class="mx-2"></VerticalDivider>

      <a
        href="https://www.example.com"
        target="_blank"
        class="mx-2 footer-link"
      >
        About Us
      </a>
    </v-row>
  </v-footer>
</template>

<script>
import VerticalDivider from "./VerticalDivider.vue";
export default {
  components: {
    VerticalDivider,
  },
};
</script>

<style scoped>
.footer-link {
  text-decoration: none;
  color: white;
}
</style>
