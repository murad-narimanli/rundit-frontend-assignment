<template>
  <div id="app">
    <MainLayout>
      <!--      router will go here-->
      <PageLayout name="Home">
        <div class="">
          <div class="row">
            <div class="col-6">
              <div class="table-custom mb-2">
                <table class="table mb-0">
                  <thead>
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Last</th>
                    <th scope="col">
                      <div class="tab-titles">
                        <span class="title"> 1x </span>
                        <span class="title active"> 2x </span>
                        <span class="title"> 3x </span>
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="">
                      <div class="text-secondary d-flex align-items-center">
                        <div class="circle" />
                        Mark
                      </div>
                    </td>
                    <td colspan=""><div class="text-secondary">Otto</div></td>
                    <td colspan=""><div class="text-dark fw-bold">Otto</div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-6">
              <div class="table-custom mb-2">
                <table class="table mb-0">
                  <thead>
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Last</th>
                    <th scope="col">
                      <div class="tab-titles">
                        <span class="title"> 1x </span>
                        <span class="title active"> 2x </span>
                        <span class="title"> 3x </span>
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="">
                      <div class="text-secondary d-flex align-items-center">
                        <div class="circle" />
                        Mark
                      </div>
                    </td>
                    <td colspan=""><div class="text-secondary">Otto</div></td>
                    <td colspan=""><div class="text-dark fw-bold">Otto</div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import CompanyService from "@/services/company.service";
import InvestmentService from "@/services/investment.service";
import Sidebar from "./components/Layout/Sidebar.vue";
import Header from "./components/Layout/Header.vue";
import PageLayout from "@/components/Layout/PageLayout.vue";
import MainLayout from "@/components/Layout/MainLayout.vue";

@Component({
  components: {
    Sidebar,
    Header,
    PageLayout,
    MainLayout
  },
  mounted() {
    CompanyService.getAll().then((res) => {
      console.log(res)
    })
    InvestmentService.getAll().then((res) => {
      console.log(res)
    })

  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">

</style>
