<template>
  <v-container fluid class="base-page">
    <v-col class="ma-3" v-if="this.user">
      <h1>Edit Profile</h1>

      <v-row class="mt-5">
        <v-avatar
          class="ml-1"
          size="84"
        >
          <img
            :src="
              newProfilePath
                ? newProfilePath
                : this.user.get('imageProfile')
                ? this.user.get('imageProfile')
                : undefined
            "
          />
        </v-avatar>
        
        <v-col class="ml-2">
          <h4 style="color: #808080">
            We recommend an image of at least 400x400.
          </h4>

          <v-btn
            class="mt-2"
            style="border-color: #4d4fe8"
            small
            rounded
            outlined
            dark
            @click="this.selectProfileImage"
          >
            CHANGE
            <input
              type="file"
              style="display: none"
              ref="profilepicker"
              @change="this.onImageChanged"
            />
          </v-btn>
        </v-col>
      </v-row>

      <h2 class="mt-10">Display Name</h2>
      <v-text-field
        v-model="name"
        :style="{
          'max-width': $vuetify.breakpoint.smAndDown ? '250px' : '400px',
        }"
        label="Enter your display name"
        dark
      ></v-text-field>

      <h2 class="mt-3">Bio</h2>
      <v-text-field
        v-model="bio"
        :style="{
          'max-width': $vuetify.breakpoint.smAndDown ? '250px' : '400px',
        }"
        label="Enter your bio"
        dark
      ></v-text-field>
      <v-btn
        depressed
        rounded
        color="#4d4fe8"
        class="mx-2"
        style="font-size: 0.8em"
        small
        dark
        @click="this.saveProfile"
      >
        Save
      </v-btn>
    </v-col>
    <h3 v-else>Connect your wallet!</h3>
  </v-container>
</template>

<script>
import MoralisFunctions from "../functions/MockMoralisFunctions";

export default {
  mounted() {
    MoralisFunctions.initUser().then((user) => {
      this.user = user;
      this.name = user.get("name");
      this.bio = user.get("bio");
    });
  },
  data() {
    return {
      user: null,
      userProfile: null,
      name: "",
      bio: "",
    };
  },
  computed: {
    newProfilePath() {
      if (!this.userProfile) return;
      return URL.createObjectURL(this.userProfile);
    },
  },
  methods: {
    onType(text) {
      console.log(text);
      console.log("new: " + this.name);
    },
    selectProfileImage() {
      this.$refs.profilepicker.click();
    },
    onImageChanged(event) {
      this.userProfile = event.target.files[0];
    },
    async saveProfile() {
      if (!this.user) return;
      if (this.userProfile) {
        const imageUrl = await MoralisFunctions.uploadFile(
          this.userProfile.name,
          this.userProfile
        );
        this.user.set("imageProfile", imageUrl);
      }
      if (this.user.get("name") != this.name) this.user.set("name", this.name);
      if (this.user.get("bio") != this.bio) this.user.set("bio", this.bio);
      await this.user.save();
    },
  },
};
</script>

<style></style>
