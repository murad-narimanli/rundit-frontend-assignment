import Vue from "vue";
import Vuex from "vuex";
import InvestmentService, {
  Investment,
  InvestmentSummary,
  Diff,
} from "@/services/investment.service";
import CompanyService, { Company } from "@/services/company.service";
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    investmentList: [] as Investment[],
    companyList: [] as Company[],
    investmentSummary: [] as InvestmentSummary[],
    differences: [] as number[],
    isLoading: false as boolean,
  },
  mutations: {
    setInvestmentList(state, arr: Investment[]) {
      state.investmentList = arr;
    },
    setInvestmentSummary: function (state, arr: Investment[]) {
      const MainArr: InvestmentSummary[] = [];
      arr.map((investment: Investment) => {
        const hasCompany = MainArr.find(
          (i) => i.companyId === investment.companyId
        );
        const diffArray: Diff[] = hasCompany ? hasCompany.dates : [];
        const obj: InvestmentSummary = {
          companyId: investment.companyId,
          companyName: investment.companyName,
          dates: diffArray,
        };
        // for check and add _differences
        const da: number[] = state.differences;
        const a = moment(investment.date);
        const b = moment(new Date());
        const d = b.diff(a, "years");
        const sameDiff = state.differences.some((x) => x === d);
        !sameDiff && d !== 0 && da.push(d);
        state.differences = da.sort();

        if (!hasCompany) {
          diffArray.push({
            difference: d,
            amount: investment.amount,
          });
          MainArr.push(obj);
        } else {
          diffArray.forEach((z) => {
            if (z.difference === d) {
              z.amount += investment.amount;
            }
            if (z.difference !== d) {
              diffArray.push({
                difference: d,
                amount: investment.amount,
              });
            }
          });
          MainArr.length &&
            MainArr.forEach((inv, i) => {
              if (inv.companyId === investment.companyId) {
                MainArr[i] = obj;
              }
            });
        }
        state.investmentSummary = MainArr;
      });
    },
    getAllCompanies: async function (state): Promise<void> {
      state.isLoading = true;
      await CompanyService.getAll()
        .then((res: Array<Company>) => {
          state.companyList = res;
        })
        .finally(() => (state.isLoading = false));
    },
  },
  actions: {
    getAllCompanies({ commit }) {
      commit("getAllCompanies");
    },
    async getAllInvestments({ state, commit }): Promise<void> {
      state.isLoading = true;
      await InvestmentService.getAll()
        .then((res: Array<Investment>) => {
          const arr = res.map((x: Investment) => {
            const obj: Company | undefined = state.companyList.find(
              (company: Company) => company.id === x.companyId
            );
            return {
              ...x,
              companyName:obj?.name
            };
          });
          commit("setInvestmentList", arr);
          commit("setInvestmentSummary", arr);
        })
        .finally(() => (state.isLoading = false));
    },
    deleteFromList({ dispatch }, id: number) {
      InvestmentService.deleteById(id).then(() => {
        dispatch("getAllInvestments");
      });
    },
  },
  getters: {
    investmentList(state) {
      return state.investmentList;
    },
    differences(state) {
      return state.differences;
    },
    companyList(state) {
      return state.companyList;
    },
    investmentSummary(state) {
      return state.investmentSummary;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
});
