import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

import focus from "./directives/focus.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(focus);

new Vue({
  render: h => h(App)
}).$mount("#app");
