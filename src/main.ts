import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css';
// main css
import './assets/scss/main.css'
import './assets/css/animate.css'



Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
