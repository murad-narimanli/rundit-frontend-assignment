
export interface IRoutesNames {
  investmentList: string;
  investmentSummary: string;
}

const routesNames: Readonly<IRoutesNames> = {
  investmentList: "investment/list",
  investmentSummary: "investment/summary",
};

declare module "vue/types/vue" {
  interface Vue {
    $routesNames: IRoutesNames;
  }
}

export default routesNames;
