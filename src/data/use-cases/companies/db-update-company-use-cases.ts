import { Company } from "../../../domain/entities/company";
import { UpdateCompany } from "../../../domain/use-cases/companies/update-company";
import { UpdateCompanyRepository } from "../../protocols/companies/update-company-repository";

export class DbUpdateCompany implements UpdateCompany {
  constructor (
    private readonly updateCompanyRepository: UpdateCompanyRepository
    ) {}

  async update (company: Company): Promise<boolean> {
    return await this.updateCompanyRepository.update(company)
  }
}