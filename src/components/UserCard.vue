<template>
  <div class="user-card">
    <div
      class="profile"
      v-bind:style="{ 'background-image': 'url(' + profile_image + ')' }"
    ></div>
    <div
      class="background"
      v-bind:style="{ 'background-image': 'url(' + bg_image + ')' }"
    ></div>
  </div>
</template>


<script>
export default {
  setup() {},
  data: () => ({
    bg_image:
      "https://cdn.dribbble.com/users/5345153/screenshots/14752208/shot-cropped-1607858708967.png?compress=1&resize=400x300",
    profile_image:
      "https://cdn.dribbble.com/users/721278/screenshots/12340411/media/08c8cf9f7e2aba9659c2cd67091e5d30.jpeg?compress=1&resize=400x300",
  }),
};
</script>

<style scoped>
.user-card {
  
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 30px;
  width: 200px;
  height: 200px;
  border-radius: 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.25);
}

.user-card .background {

  margin-right: 30px;
  width: 200px;
  height: 200px;
  filter: blur(2px);
  border-radius: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}

.user-card .profile {
  position: absolute;
  z-index: 900;
  width: 90px;
  height: 90px;
  border-radius: 100px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
