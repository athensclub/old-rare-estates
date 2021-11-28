import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import CUSTOM_ICONS from "../icons/icons.js"

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
          primary: '#4d4fe8'
      },
    },
  },
  
  icons: {
    values: CUSTOM_ICONS
  },
});
