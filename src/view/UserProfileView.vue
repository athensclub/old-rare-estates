<template>
  <v-container dark fluid class="base-page">
    <v-col
      class="pb-5"
      style="border-bottom: 1px solid #7f7f7f"
      align="center"
      justify="center"
      v-if="this.user"
    >
      <v-img
        class="rounded-lg mx-5"
        style=""
        height="150px"
        :src="
          this.newBackgroundPath
            ? this.newBackgroundPath
            : this.user.get('imageBackground')
            ? this.user.get('imageBackground')
            : require('../assets/testImg2.png')
        "
      >
        <v-row justify="end" class="ma-2">
          <v-btn dark outlined rounded @click="this.selectBackgroundImage">
            CHANGE
            <input
              type="file"
              style="display: none"
              ref="backgroundpicker"
              @change="this.onImageChanged"
            />
          </v-btn>
        </v-row>
      </v-img>

      <!-- Is there a better way to put avatar on top background image rather than using translateY? Please let me know.. -->
      <v-col class="ma-0 pa-0" style="transform: translateY(-50px)">
        <v-avatar class="ml-1" size="100" color="green">
          <img
            :src="
              this.user.get('imageProfile')
                ? this.user.get('imageProfile')
                : undefined
            "
          />
        </v-avatar>

        <h2 class="my-2 font-weight-bold">
          {{
            this.user.get("name") == null ? "Unnamed" : this.user.get("name")
          }}
        </h2>

        <v-row justify="center" align="center">
          <h5 class="font-weight-medium">
            {{ clampCharacters(this.user.get("ethAddress"), 22) }}
          </h5>

          <v-btn v-clipboard:copy="this.user.get('ethAddress')" dark icon xs>
            <v-icon small>$copy</v-icon>
          </v-btn>
        </v-row>

        <v-btn
          v-if="isUserOwn"
          style="border: 1px solid #7f7f7f"
          class="mt-4"
          to="/editprofile"
          rounded
          dark
          outlined
          small
        >
          Edit Profile
        </v-btn>

        <h4 class="mt-3" style="color: #b7b7b7">
          <pre>{{ this.user.get("bio") }}</pre>
        </h4>
      </v-col>

      <v-row class="flex-nowrap" align="center" style="overflow-x: auto;">
        <DecoratedLink text="On sale" :to="`${parentRoute}/onsale`" />
        <VerticalDivider />
        <DecoratedLink text="Estates" :to="`${parentRoute}/estates`" />
        <VerticalDivider />
        <DecoratedLink text="Created" :to="`${parentRoute}/created`" />
        <VerticalDivider />
        <DecoratedLink text="Liked" :to="`${parentRoute}/liked`" />
        <VerticalDivider />
        <DecoratedLink text="Activity" :to="`${parentRoute}/activity`" />
      </v-row>
    </v-col>
    <v-col
      class="pb-5"
      style="height: 75vh"
      align="center"
      justify="center"
      v-else
    >
      <h3>Connect Your Wallet!</h3>
    </v-col>

    <router-view :id="userID" v-if="this.user"></router-view>

    <BottomFooter />
  </v-container>
</template>

<script>
import BottomFooter from "../components/BottomFooter.vue";
import VerticalDivider from "../components/VerticalDivider.vue";
import DecoratedLink from "../components/DecoratedLink.vue";
import clampCharactersUtil from "../util/clampCharacters.js";
import MoralisFunctions from "../functions/MockMoralisFunctions";

export default {
  data: () => ({
    user: null,
    background: null,
  }),
  props: {
    id: String,
  },
  mounted() {
    MoralisFunctions.initUser().then((user) => {
      this.user = user;
    });
  },
  methods: {
    clampCharacters(value, limit) {
      return clampCharactersUtil(value, limit);
    },
    selectBackgroundImage() {
      this.$refs.backgroundpicker.click();
    },
    async onImageChanged(event) {
      this.background = event.target.files[0];
      if (this.background) {
        const imageUrl = await MoralisFunctions.uploadFile(
          this.background.name,
          this.background
        );
        this.user.set("imageBackground", imageUrl);
        await this.user.save();
      }
    },
  },
  computed: {
    newBackgroundPath() {
      if (!this.background) return;
      return URL.createObjectURL(this.background);
    },
    parentRoute() {
      return this.isUserOwn ? "/myestates" : `/user/${this.id}`;
    },
    userID() {
      return this.user?.get("id");
    },
    isUserOwn() {
      return this.id === this.userID;
    },
  },
  components: {
    VerticalDivider,
    DecoratedLink,
    BottomFooter,
  },
};
</script>

<style scoped>
.profile-choose-view {
  border: 1px solid white;
}
</style>
