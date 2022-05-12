import { Company } from "../../../domain/entities/company";
import { AddCompany } from "../../../domain/use-cases/companies/add-company";
import { AddCompanyRepository } from "../../protocols/companies/add-company-repository";

export class DbAddCompany implements AddCompany {
  constructor (
    private readonly addCompanyRepository: AddCompanyRepository
    ) {}

  async add (company: Company): Promise<boolean> {
    return await this.addCompanyRepository.add(company)
  }
}