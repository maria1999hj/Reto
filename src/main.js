import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueInput from "@simpli/vue-input";

Vue.use(VueInput);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
