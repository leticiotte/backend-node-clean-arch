import { Company } from "../../../domain/entities/company";
import { ListCompanies } from "../../../domain/use-cases/companies/list-all-companies";
import { ListCompaniesRepository } from "../../protocols/companies/list-all-companies-repository";

export class DbListCompanies implements ListCompanies {
  constructor (
    private readonly listCompaniesRepository: ListCompaniesRepository
    ) {}

  async list (): Promise<Company[]> {
    return await this.listCompaniesRepository.list()
  }
}