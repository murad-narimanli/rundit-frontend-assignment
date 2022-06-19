<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompanyService from "@/services/company.service";
import InvestmentService from "@/services/investment.service";
import Sidebar from "./components/elements/Sidebar.vue";
import Header from "./components/elements/Header.vue";
import PageLayout from "./components/layout/PageLayout.vue";
import MainLayout from "./components/layout/MainLayout.vue";

@Component({
  components: {
    Sidebar,
    Header,
    PageLayout,
    MainLayout,
  },
  mounted: function () {
    CompanyService.getAll().then((res) => {
      console.log(res);
    });
    InvestmentService.getAll().then((res) => {
      console.log(res);
    });
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
