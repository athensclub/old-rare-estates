<template>
  <v-app-bar
    style="z-index: 1000"
    color="black"
    flat
    dark
    fixed
    extension-height="0"
  >
    <v-toolbar-title>
      <img width="40px" height="auto" src="../assets/logo.png" />
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      v-model="searchQuery"
      v-if="!mobileMenuOpened"
      background-color="#292929"
      class="mt-6 py-0"
      :style="{ width: $vuetify.breakpoint.smAndDown ? '70%' : '' }"
      placeholder="Search Estates/Users"
      prepend-inner-icon="mdi-magnify"
      @keypress.enter="routeToSearch"
      filled
      rounded
      dense
    ></v-text-field>

    <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>

    <v-btn
      v-if="$vuetify.breakpoint.smAndDown"
      style="border-color: #9f9f9f"
      class="mr-3"
      @click="this.toggleMobileMenu"
      icon
      outlined
      small
    >
      <v-icon small>{{ mobileMenuOpened ? "mdi-close" : "mdi-menu" }}</v-icon>
    </v-btn>

    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-spacer></v-spacer>

      <DecoratedLink text="Explore" to="/explore" />

      <DecoratedLink text="MyEstates" to="/myestates" />

      <DecoratedLink text="Blogs" to="/blogs" />

      <VerticalDivider class="mx-3"></VerticalDivider>

      <!-- NOTE: When there is a link for how it works, put it here -->
      <a
        href="https://www.example.com"
        target="_blank"
        class="mx-3 text-subtitle1 font-weight-light app-bar-text-button"
      >
        How it works
      </a>

      <v-menu style="z-index: 2000" nudge-bottom="32px" fixed>
        <template v-slot:activator="{ on, attrs }">
          <a
            v-bind="attrs"
            v-on="on"
            class="mx-3 text-subtitle1 font-weight-light app-bar-text-button"
          >
            Community
          </a>
        </template>

        <v-col class="mt-0 pt-0 rounded-lg menu-container">
          <v-hover
            v-for="(community, i) in communities"
            :key="i"
            v-slot="{ hover }"
          >
            <a
              :href="community.url"
              target="_blank"
              style="text-decoration: none"
            >
              <v-row
                style="cursor: pointer"
                class="ma-2 ml-0 my-4 community-row"
                :class="{ 'on-hover': hover }"
              >
                <v-icon>{{ community.icon }}</v-icon>

                <div class="ml-2 font-weight-light" style="color: white">
                  {{ community.name }}
                </div>
              </v-row>
            </a>
          </v-hover>

          <div class="menu-divider" style="bottom: 60px"></div>

          <v-btn outlined rounded dark class="ma-4 mt-3 mb-1" small>
            <h4 class="donate-text">DONATE</h4>

            <h4>🌈</h4>
          </v-btn>
        </v-col>
      </v-menu>

      <v-spacer></v-spacer>

      <!-- Tried using color="primary" but it doesn't work. I've already set primary button in vuetify.js. Any Ideas? -->
      <v-row>
        <v-btn
          depressed
          rounded
          color="#4d4fe8"
          class="mx-2"
          style="font-size: 0.8em"
          small
          @click="this.createEstate"
        >
          CREATE
        </v-btn>

        <v-menu
          v-if="this.user"
          style="z-index: 2000"
          nudge-bottom="32px"
          fixed
        >
          <template v-slot:activator="{ on, attrs }">
            <v-row class="pa-0 ml-2" align="center" v-bind="attrs" v-on="on">
              <div>
                {{
                  user.get("name")
                    ? clampCharacters(user.get("name"), 15)
                    : clampCharacters(user.get("ethAddress"), 15)
                }}
              </div>
              <v-avatar class="ml-2" size="32" color="green">
                <img :src="user.get('imageProfile')" />
              </v-avatar>
            </v-row>
          </template>

          <v-col class="rounded-lg menu-container ">
            <v-row class="mt-2 ml-1" align="center">
              <div class="text-subtitle-1" style="color: white">
                {{ clampCharacters(this.user.get("ethAddress"), 20) }}
              </div>

              <v-btn
                v-clipboard:copy="this.user.get('ethAddress')"
                dark
                icon
                xs
              >
                <v-icon small>$copy</v-icon>
              </v-btn>
            </v-row>

            <div class="text-subtitle-2 mt-2 ml-1" style="color: #4d4fe8">
              Joined at {{ joinedDate }}
            </div>

            <v-row class="ml-1 mt-4 mb-12">
              <img
                class="rounded-circle"
                style="border: 1px solid #4d4fe8"
                src="../assets/ethImage.png"
                width="42.6px"
                height="44px"
              />

              <v-col class="pa-0 ml-2">
                <div class="text-subtitle-2" style="color: #808080">
                  Balance
                </div>
                <div class="text-subtitle-2" style="color: white">
                  {{ balance }} ETH
                </div>
              </v-col>
            </v-row>

            <div class="menu-divider" style="top: 150px"></div>

            <router-link class="menu-link" to="/myestates">
              <v-row class="mx-1" v-ripple>My Estates</v-row>
            </router-link>

            <router-link class="menu-link" to="/editprofile">
              <v-row class="mx-1 mt-5 mb-10" v-ripple>Edit Profile</v-row>
            </router-link>

            <a style="color: #A43030" class="ml-1" @click="disconnect">Disconnect</a>
          </v-col>
        </v-menu>

        <v-btn
          v-else
          outlined
          rounded
          class="mx-2"
          style="font-size: 0.8em"
          small
          @click="this.connectWallet"
        >
          CONNECT WALLET
        </v-btn>
      </v-row>
    </template>

    <template #extension>
      <div
        class="my-0 py-0"
        style="border-top: 1px solid #9f9f9f; width: 100%"
      ></div>
    </template>
  </v-app-bar>
</template>

<script>
import clampCharactersUtil from "../util/clampCharacters.js";
import DecoratedLink from "./DecoratedLink.vue";
import VerticalDivider from "./VerticalDivider.vue";
import MoralisFunctions from "../functions/MockMoralisFunctions";
import community from "../assets/community.js";

export default {
  props: {
    mobileMenuOpened: Boolean,
  },
  components: {
    VerticalDivider,
    DecoratedLink,
  },
  mounted() {
    MoralisFunctions.initUser().then((user) => (this.user = user));
  },
  data: () => ({
    user: null,
    searchQuery: "",
    communities: community,
    balance: 0.0, // please implement calling backend for this 🥺
    joinedDate: "30.2.21", // please implement calling backend for this 🥺
  }),
  methods: {
    clampCharacters(value, limit) {
      return clampCharactersUtil(value, limit);
    },
    disconnect(){
      MoralisFunctions.disconnect();
      this.user = null;
    },
    async createEstate() {
    },
    async connectWallet() {
      this.user = await MoralisFunctions.connectWallet();
    },
    routeToSearch() {
      if (this.searchQuery.length == 0) this.$router.push("/explore");
      else this.$router.push(`/search?q=${this.searchQuery}`);
    },
    toggleMobileMenu() {
      this.$emit("toggle-mobile-menu");
    },
  },
};
</script>

<style scoped>
.community-row.on-hover {
  opacity: 0.9;
}

.menu-link {
  color: white;
  text-decoration: none;
}

.menu-container {
  background: #212121;
  border: 1px solid #909090;
}

.menu-divider {
  border-bottom: 1px solid #909090;
  position: absolute;
  left: 0px;
  width: 100%;
}

.donate-text {
  background: linear-gradient(#4d4fe8, #b352ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.app-bar-text-button {
  text-decoration: none;
  color: white;
}

.app-bar-text-button:not(:hover) {
  opacity: 0.95;
}

h1 {
  color: #fff;
}
</style>
