import { Company } from "../../../domain/entities/company";

export interface UpdateCompanyRepository {
  update: (company: Company) => Promise<boolean>
}
