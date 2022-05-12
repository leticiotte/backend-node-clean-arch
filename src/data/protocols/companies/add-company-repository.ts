import { Company } from "../../../domain/entities/company";

export interface AddCompanyRepository {
  add: (company: Company) => Promise<boolean>
}
