import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import store from "./store";

//router configuration
import router, { routesNames } from "./router";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// main css
import "./assets/scss/main.scss";
import "./assets/css/animate.css";

Vue.config.productionTip = false;

Vue.prototype.$routesNames = routesNames;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
