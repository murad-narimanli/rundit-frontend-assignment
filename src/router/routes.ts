import { RouteConfig } from "vue-router";
import InvestmentList from "@/views/InvestmentList.vue";
import InvestmentSummary from "@/views/InvestmentSummary.vue";
import RoutesNames from "./routesNames";

export const Routes: RouteConfig[] = [
  {
    path: "/investment/list",
    name: RoutesNames.investmentList,
    component: InvestmentList,
  },
  {
    path: "/investment/summary",
    name: RoutesNames.investmentList,
    component: InvestmentSummary,
  },
  {
    path: "*",
    redirect: { name: RoutesNames.investmentList },
  },
];
