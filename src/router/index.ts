import Vue from "vue";
import VueRouter, { Location, Route } from "vue-router";
import routesNames from "./routesNames";

import { Routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: Routes,
  linkActiveClass: "active",
});
export { Location, Route , routesNames};

export default router;
