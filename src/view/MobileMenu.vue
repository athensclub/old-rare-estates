<template>
  <v-container class="ma-0 pa-0 mobile-menu-container">
    <v-col>
      <v-col class="ma-0 mt-10 pa-0 pb-5 mobile-menu-info-column">
        <h3 class="mt-3 mobile-menu-gradient-text">Rare Estates</h3>

        <router-link class="mobile-menu-link" to="/explore">
          <h3 @click="hide">Explore</h3>
        </router-link>

        <router-link class="mobile-menu-link" to="/myestates">
          <h3 @click="hide">My Estates</h3>
        </router-link>

        <router-link class="mobile-menu-link" to="/blogs">
          <h3 @click="hide">Blogs</h3>
        </router-link>

        <a
          class="mobile-menu-link"
          href="http://www.example.com"
          target="_blank"
        >
          <h3 @click="hide">How it works</h3>
        </a>

        <h3 class="mt-3 mobile-menu-gradient-text">Community</h3>

        <a
          v-for="(community, i) in communities"
          :key="i"
          :href="community.url"
          target="_blank"
          style="text-decoration: none"
        >
          <v-row class="ma-2 ml-0">
            <v-icon>{{ community.icon }}</v-icon>

            <div class="ml-2 font-weight-light" style="color: white">
              {{ community.name }}
            </div>
          </v-row>
        </a>

        <v-btn outlined rounded dark class="mt-3" small>
          <h4 class="mobile-menu-gradient-text">DONATE</h4>

          <h4>🌈</h4>
        </v-btn>

        <template v-if="this.user">
          <h3 class="mt-3 mobile-menu-gradient-text">About You</h3>

          <v-row class="mt-2 ml-1" align="center">
            <div class="text-subtitle-1" style="color: white">
              {{ clampCharacters(this.user.get("ethAddress"), 20) }}
            </div>

            <v-btn v-clipboard:copy="this.user.get('ethAddress')" dark icon xs>
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
        </template>
      </v-col>

      <v-row
        class="ma-0 pa-0 mobile-menu-button-row"
        justify="center"
        align="center"
      >
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

        <v-btn
          v-if="!this.user"
          outlined
          rounded
          class="mx-2"
          style="font-size: 0.8em"
          small
          @click="this.connectWallet"
        >
          CONNECT WALLET
        </v-btn>

        <v-btn v-else color="red"  class="mx-2" style="font-size: 0.8em" @click="disconnect" rounded small>
          DISCONNECT
        </v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import clampCharactersUtil from "../util/clampCharacters.js";
import community from "../assets/community.js";
import MoralisFunctions from "../functions/MockMoralisFunctions";

export default {
  data: () => ({
    communities: community,
    user: null,
    balance: 0.0, // please implement calling backend for this 🥺
    joinedDate: "30.2.21", // please implement calling backend for this 🥺
  }),
  mounted() {
    MoralisFunctions.initUser().then((user) => (this.user = user));
  },
  methods: {
    hide() {
      this.$emit("hide-mobile-menu");
    },
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
  },
};
</script>

<style scoped>
.mobile-menu-button-row {
  width: 100%;
  position: absolute;
  height: 60px;
  bottom: 0;
  left: 0;
  background-color: black;
  border-top: 1px solid white;
}

.mobile-menu-gradient-text {
  background: linear-gradient(#4d4fe8, #b352ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.mobile-menu-info-column {
  overflow-y: auto;
  overflow-x: hidden;
  height: 80vh;
}

.mobile-menu-link {
  color: white;
  text-decoration: none;
}

.mobile-menu-container {
  background-color: black;
  width: 100vw;
  height: 100vh;
}
</style>
