import { DeleteCompany } from "../../../domain/use-cases/companies/delete-company";
import { DeleteCompanyRepository } from "../../protocols/companies/delete-company-repository";

export class DbDeleteCompany implements DeleteCompany {
  constructor (
    private readonly deleteCompanyRepository: DeleteCompanyRepository
    ) {}

  async delete (companyId: string): Promise<boolean> {
    return await this.deleteCompanyRepository.delete(companyId)
  }
}