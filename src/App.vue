<template>
  <v-app>
    <HeaderBar
      v-if="headerBar"
      :mobileMenuOpened="overlay"
      @toggle-mobile-menu="overlay = !overlay"
    ></HeaderBar>
    <v-main>
      <router-view
        @show-header-bar="headerBar = true"
        @hide-header-bar="headerBar = false"
      ></router-view>
    </v-main>
    <v-overlay v-model="overlay">
      <MobileMenu @hide-mobile-menu="overlay = false" />
    </v-overlay>
  </v-app>
</template>

<script>
import MobileMenu from "./view/MobileMenu.vue";
import HeaderBar from "./components/Header.vue";
export default {
  name: "App",
  data: () => ({
    overlay: false,
    headerBar: true,
  }),
  watch: {
    "$vuetify.breakpoint.smAndDown": function(newValue) {
      if (!newValue) this.overlay = false;
    },
  },
  components: {
    HeaderBar,
    MobileMenu,
  },
};
</script>
<style>
#app {
  background-color: black;
}

.base-page {
  margin-top: 64px;
  background-color: #000;
  color: #fff;
}

.vueperslides__bullet .default {
  transition: 0.2s;
  width: 24px;
  height: 12px;
}

.vueperslide {
  border-radius: 1vw;
}

::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

::-webkit-scrollbar-thumb {
  background: #3a3a3a;
  border-radius: 5px;
}
</style>
