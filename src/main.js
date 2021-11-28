import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueClipboard from "vue-clipboard2";
import router from "./router";
import MoralisFunctions from "./functions/MockMoralisFunctions"

Vue.config.productionTip = false;
Vue.use(VueClipboard);

MoralisFunctions.initMoralis();

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
