<template>
  <PageLayout name="Investment Summary">
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
    <div class="col-6">here will be chart</div>
  </PageLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageLayout from "@/components/layout/PageLayout.vue";

@Component({
  components: {
    PageLayout,
  },
})
export default class InvestmentSummary extends Vue {}
</script>

<style lang="scss" scoped></style>
