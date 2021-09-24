import { delayFor } from "./utils";

export interface Company {
  id: number;
  name: string;
}

const _data: Company[] = [
  {
    id: 1,
    name: "Company A",
  },
  {
    id: 2,
    name: "Company B",
  },
  {
    id: 3,
    name: "Company C",
  },
  {
    id: 4,
    name: "Company D",
  },
];

interface CompanyService {
  getAll: () => Promise<Company[]>;
}

const CompanyService: CompanyService = {
  getAll: async () => {
    await delayFor(1000);
    return _data;
  },
};

Object.freeze(CompanyService);
export default CompanyService;
