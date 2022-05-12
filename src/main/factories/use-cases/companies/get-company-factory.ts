import { GetCompany } from "../../../../domain/use-cases/companies/get-company";
import { DbGetCompany } from "../../../../data/use-cases/companies/db-get-company-use-cases";
import { MongoCompanyRepository } from "../../../../infra/repositories/mongo/mongo-company-repository";

export const makeGetCompanyUseCase = (Company: any): GetCompany => {
  const mongoGetCompanyRepository = new MongoCompanyRepository(Company);
  return new DbGetCompany(mongoGetCompanyRepository);
};
