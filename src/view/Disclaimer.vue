<!-- This is a page to put for a demo in my portfolio. 
The demo is used in a portfolio that I will apply in universities. -->

<template>
  <v-container fluid class="base-page" style="margin-top: 0px;">
    <v-col align="center" justify="center">
      <h2>
        เว็บไซต์นี้สร้างโดย นายกวิน รัตนพันธ์ โดยเป็นโปรเจค rare-estates
        เวอร์ชันแรกทำให้กับ บริษัท บัวลอยเทค จำกัด ซึ่งใน demo
        นี้จะเป็นส่วนของเว็บไซต์ที่ผมเขียนเองทั้งหมดและผมไม่ได้มีส่วนเกี่ยวข้องกับโปรแจค
        rare-estates อีกต่อไป ผมได้ทำการดัดแปลงเว็บไซต์บางส่วนเพื่อการ demo
        ในครั้งนี้ (นำระบบ login, create ออก เป็นต้น)
      </h2>
      <v-btn
        class="mx-1 my-5 text-none text-subtitle-1"
        color="#4D4FE8"
        to="/explore"
        rounded
        large
        dark
        >เยี่ยมชม
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$emit("hide-header-bar");
    });
  },

  beforeRouteLeave(to, from, next) {
    this.$emit("show-header-bar");
    next();
  },
};
</script>

<style></style>
