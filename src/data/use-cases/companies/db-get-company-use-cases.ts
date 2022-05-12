import { Company } from "../../../domain/entities/company";
import { GetCompany } from "../../../domain/use-cases/companies/get-company";
import { GetCompanyRepository } from "../../protocols/companies/get-company-repository";

export class DbGetCompany implements GetCompany {
  constructor (
    private readonly getCompanyRepository: GetCompanyRepository
    ) {}

  async get (companyId: string): Promise<Company> {
    return await this.getCompanyRepository.get(companyId)
  }
}