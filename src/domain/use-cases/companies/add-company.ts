import { Company } from "../../entities/company";

export interface AddCompany {
  add: (company: Company) => Promise<boolean>
}
