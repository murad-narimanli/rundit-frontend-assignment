<template>
  <PageLayout name="Investment List">
    <div v-if="!isLoading" class="col-12">
      <div class="table-custom mb-2">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="key" v-for="(investment, key) in investmentList">
              <td>
                <div class="text-secondary d-flex align-items-center">
                  <div class="circle" />
                  {{ investment.companyName }}
                </div>
              </td>
              <td>
                <div class="text-secondary">{{ investment.date }}</div>
              </td>
              <td class="d-flex justify-content-between">
                <span class="text-dark me-2 fw-bold">
                  {{ investment.amount }}
                </span>
                <DeleteButton
                  @onOk="deleteFromList(investment.id)"
                  :id="investment.id"
                />
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
import PageLayout from "@/components/layout/PageLayout.vue";
import DeleteButton from "@/components/elements/DeleteButton.vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "InvestmentList",
  components: {
    PageLayout,
    DeleteButton,
  },
  computed: {
    ...mapGetters([
      "investmentList",
      "investmentSummary",
      "isLoading",
      "companyList",
    ]),
  },
  methods: {
    ...mapActions(["getAllCompanies", "getAllInvestments", "deleteFromList"]),
  },
  mounted() {
    this.getAllCompanies();
    this.getAllInvestments();
  },
  watch: {},
});
</script>

<style lang="scss" scoped></style>
