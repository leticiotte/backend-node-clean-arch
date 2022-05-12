import { UpdateCompany } from "../../../../domain/use-cases/companies/update-company";
import { DbUpdateCompany } from "../../../../data/use-cases/companies/db-update-company-use-cases";
import { MongoCompanyRepository } from "../../../../infra/repositories/mongo/mongo-company-repository";

export const makeUpdateCompanyUseCase = (Company: any): UpdateCompany => {
  const mongoUpdateCompanyRepository = new MongoCompanyRepository(Company);
  return new DbUpdateCompany(mongoUpdateCompanyRepository);
};
