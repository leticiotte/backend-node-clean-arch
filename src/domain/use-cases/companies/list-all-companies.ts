import { Company } from "../../entities/company";

export interface ListCompanies {
  list: () => Promise<Company[]>
}
