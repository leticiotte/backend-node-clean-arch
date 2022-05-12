import { Company } from "../../entities/company";

export interface GetCompany {
  get: (companyId: string) => Promise<Company>
}
