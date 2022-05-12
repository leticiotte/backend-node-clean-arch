import { Company } from "../../entities/company";

export interface UpdateCompany {
  update: (company: Company) => Promise<boolean>
}
