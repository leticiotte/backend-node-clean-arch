import { Company } from "../../../domain/entities/company";

export interface ListCompaniesRepository {
  list: () => Promise<Company[]>
}
