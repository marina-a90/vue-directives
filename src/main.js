import Vue from "vue";
import App from "./App.vue";

import focus from "./directives/focus.js";

Vue.config.productionTip = false;

Vue.use(focus);

new Vue({
  render: h => h(App)
}).$mount("#app");
