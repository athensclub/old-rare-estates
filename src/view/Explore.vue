<template>
  <v-container fluid class="base-page">
    <DecoratedCarousel
      v-model="selectedSlide"
      :images="slides"
      slideHeight="45vw"
      :aspectRatio="2.25"
      hideBorders
      cycle
    ></DecoratedCarousel>

    <br />

    <v-col
      class="pa-0"
      :class="{ 'my-16': !$vuetify.breakpoint.smAndDown }"
      align="center"
    >
      <h2
        :class="{
          'text-h3': !$vuetify.breakpoint.smAndDown,
          'mb-5': !$vuetify.breakpoint.smAndDown,
        }"
      >
        What is the Sphere?
      </h2>

      <h3
        :class="{
          'text-h4 ': !$vuetify.breakpoint.smAndDown,
          'mb-16': !$vuetify.breakpoint.smAndDown,
          'mb-5': $vuetify.breakpoint.smAndDown,
        }"
        style="color: #707070;"
      >
        “The individual world”
      </h3>

      <Sphere class="sphere-image" />
    </v-col>

    <br />

    <h1 class="ml-4" :class="{ 'mt-8': !$vuetify.breakpoint.smAndDown }">
      Explore Spheres
    </h1>

    <v-row class="ml-4 mt-3">
      <v-btn
        class="mx-1 my-1 text-none text-subtitle-1"
        color="#4D4FE8"
        rounded
        small
        dark
        >ALL</v-btn
      >

      <v-btn
        v-for="(tag, i) in availableTags"
        :key="i"
        class="mx-1 my-1 text-none text-subtitle-1"
        dark
        rounded
        outlined
        small
      >
        {{ tag }}
      </v-btn>
    </v-row>

    <EstatesView :estates="estates"></EstatesView>

    <v-row class="mb-16" :class="{ 'pb-16': !$vuetify.breakpoint.smAndDown }">
      <v-img
        src="../assets/personUsingVR.png"
        :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '40vw'"
      ></v-img>

      <v-col
        :class="{ 'mt-16': !$vuetify.breakpoint.smAndDown }"
        align="center"
      >
        <h1
          class="font-weight-medium"
          :class="{ 'text-h2': !$vuetify.breakpoint.smAndDown }"
        >
          Try VR mode with your <br v-if="!$vuetify.breakpoint.smAndDown" />
          Virtual Reality Headset
        </h1>

        <v-btn
          class="px-16"
          :class="{
            'mt-16': !$vuetify.breakpoint.smAndDown,
            'mt-6': $vuetify.breakpoint.smAndDown,
          }"
          :style="{ width: $vuetify.breakpoint.smAndDown ? '90%' : undefined }"
          color="#A940B6"
          x-large
          dark
          rounded
        >
          <v-row align="center" justify="center">
            <v-icon large>$vr</v-icon>

            <h3 class="ml-4">
              LIVE DEMO
            </h3>
          </v-row>
        </v-btn>

        <v-row
          class="ml-0 pl-0"
          :class="{
            'mt-16': !$vuetify.breakpoint.smAndDown,
            'mt-8': $vuetify.breakpoint.smAndDown,
          }"
          justify="center"
        >
          <!-- Is there a better way to set size these image other than hard code in the size?-->
          <img
            src="../assets/steam.png"
            :style="{
              width: $vuetify.breakpoint.smAndDown ? '30vw' : '15vw',
              height: $vuetify.breakpoint.smAndDown ? '9vw' : '4.5vw',
            }"
          />
          <img
            src="../assets/oculus.png"
            :style="{
              width: $vuetify.breakpoint.smAndDown ? '36vw' : '18vw',
              height: $vuetify.breakpoint.smAndDown ? '9vw' : '4.5vw',
            }"
          />
        </v-row>
      </v-col>
    </v-row>

    <BottomFooter />
  </v-container>
</template>

<script>
import Sphere from "../assets/Sphere.vue";
import BottomFooter from "../components/BottomFooter.vue";
import DecoratedCarousel from "../components/DecoratedCarousel.vue";
import "vueperslides/dist/vueperslides.css";
import EstatesView from "./estate/EstatesView.vue";

export default {
  name: "HelloWorld",

  data: () => ({
    availableTags: [
      "Mars",
      "Fantasy",
      "Roman",
      "Atlantis",
      "Futuristic",
    ],
    estates: [
      {
        userLiked: false,
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        name: "Estate Name",
        creator: "Someone",
        price: 22.0,
        like: 123000,
        id: 1,
      },
      {
        userLiked: false,
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        name: "Estate Name",
        creator: "Someone",
        price: 22.0,
        like: 123000,
        id: 1,
      },
      {
        userLiked: false,
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        name: "Estate Name",
        creator: "Someone",
        price: 22.0,
        like: 123000,
        id: 1,
      },
      {
        userLiked: false,
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        name: "Estate Name",
        creator: "Someone",
        price: 22.0,
        like: 123000,
        id: 1,
      },
      {
        userLiked: false,
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        name: "Estate Name",
        creator: "Someone",
        price: 22.0,
        like: 123000,
        id: 1,
      },
      {
        userLiked: false,
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        name: "Estate Name",
        creator: "Someone",
        price: 22.0,
        like: 123000,
        id: 1,
      },
    ],
    selectedSlide: 0,
    slides: [
      require("@/assets/testImg2.png"),
      require("@/assets/testimg.jpeg"),
      require("@/assets/testImg3.png"),
      require("@/assets/testimg.jpeg"),
      require("@/assets/testImg2.png"),
      require("@/assets/testImg3.png"),
    ],
  }),
  components: { DecoratedCarousel, BottomFooter, EstatesView, Sphere },
};
</script>

<style scoped>
.sphere-image {
  width: 100%;
  height: auto;
}
</style>
