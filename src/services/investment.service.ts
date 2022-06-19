import { delayFor } from "./utils";

type DateString = string; // YYYY-MM-DD

export interface Investment {
  amount: number;
  companyId: number;
  companyName?: string;
  date: DateString;
  id: number;
}

export interface Diff {
  difference: number;
  amount: number;
}

export interface InvestmentSummary {
  companyId: number;
  companyName?: string;
  dates: Diff[];
}

let _data: Investment[] = [
  {
    amount: 10_000,
    companyId: 1,
    date: "2017-01-01",
    id: 1,
  },
  {
    amount: 50_000,
    companyId: 1,
    date: "2019-06-01",
    id: 2,
  },
  {
    amount: 40_000,
    companyId: 1,
    date: "2021-06-01",
    id: 3,
  },
  {
    amount: 100_000,
    companyId: 2,
    date: "2021-01-01",
    id: 4,
  },
  {
    amount: 180_000,
    companyId: 2,
    date: "2019-08-01",
    id: 5,
  },
  {
    amount: 70_000,
    companyId: 2,
    date: "2018-01-01",
    id: 6,
  },
  {
    amount: 120_000,
    companyId: 4,
    date: "2021-08-01",
    id: 7,
  },
  {
    amount: 180_000,
    companyId: 4,
    date: "2020-06-01",
    id: 8,
  },
  {
    amount: 200_000,
    companyId: 4,
    date: "2020-01-01",
    id: 9,
  },
];

interface InvestmentService {
  getAll: () => Promise<Investment[]>;
  deleteById: (id: number) => Promise<void>;
}

const InvestmentService: InvestmentService = {
  getAll: async () => {
    await delayFor(1000);
    return _data;
  },
  deleteById: async (id) => {
    await delayFor(1000);

    const found = _data.find((i) => i.id === id);

    if (!found) {
      throw new Error(`No investment found with id (${id})`);
    }

    _data = _data.filter((i) => i.id !== id);
  },
};

Object.freeze(InvestmentService);
export default InvestmentService;
