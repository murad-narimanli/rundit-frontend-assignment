<template>
  <PageLayout name="Investment Summary">
    <div v-if="!isLoading" class="col-12">
      <div class="table-custom mb-2">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">Total Invested Amount</th>
              <th scope="col">
                <div class="tab-titles">
                  <span
                    :key="key"
                    v-for="(diff, key) in differences"
                    v-on:click="setSelectedNumber(diff)"
                    class="title"
                    :class="selectedNumber === diff ? 'active' : ''"
                  >
                    {{ diff }} Y
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr :key="key" v-for="(summary, key) in investmentSummary">
              <td class="">
                <div class="text-secondary d-flex align-items-center">
                  <div class="circle" />
                  {{ summary.companyName }}
                </div>
              </td>
              <td colspan="">
                <div class="text-dark fw-bold">
                  {{ getAmount(summary.dates) }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-items-center p-4 mt-5"
    >
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { Diff } from "@/services/investment.service";
import PageLayout from "@/components/layout/PageLayout.vue";
export default Vue.extend({
  name: "InvestmentSummary",
  components: {
    PageLayout,
  },
  data() {
    return {
      selectedNumber: 0 as number,
    };
  },
  computed: {
    ...mapGetters([
      "investmentList",
      "investmentSummary",
      "isLoading",
      "differences",
    ]),
  },
  methods: {
    ...mapActions(["getAllCompanies", "getAllInvestments"]),
    setSelectedNumber(diff: number) {
      this.selectedNumber = diff;
    },
    getAmount(dates: Array<Diff>) {
      const obj: Diff | undefined = dates.find(
        (s: Diff) => s.difference === this.selectedNumber
      );
      if (typeof obj == "object") {
        return obj.amount;
      }
    },
  },
  mounted() {
    if (!this.investmentSummary.length) {
      this.getAllCompanies();
      this.getAllInvestments();
    }
    this.selectedNumber = 1 | this.differences[0];
  },
});
</script>

<style lang="scss" scoped></style>
