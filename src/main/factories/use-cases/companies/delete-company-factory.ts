import { DeleteCompany } from "../../../../domain/use-cases/companies/delete-company";
import { DbDeleteCompany } from "../../../../data/use-cases/companies/db-delete-company-use-cases";
import { MongoCompanyRepository } from "../../../../infra/repositories/mongo/mongo-company-repository";

export const makeDeleteCompanyUseCase = (Company: any): DeleteCompany => {
  const mongoDeleteCompanyRepository = new MongoCompanyRepository(Company);
  return new DbDeleteCompany(mongoDeleteCompanyRepository);
};
