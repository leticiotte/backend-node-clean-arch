import { AddCompany } from "../../../../domain/use-cases/companies/add-company";
import { DbAddCompany } from "../../../../data/use-cases/companies/db-add-company-use-cases";
import { MongoCompanyRepository } from "../../../../infra/repositories/mongo/mongo-company-repository";

export const makeAddCompanyUseCase = (Company: any): AddCompany => {
  const mongoAddCompanyRepository = new MongoCompanyRepository(Company);
  return new DbAddCompany(mongoAddCompanyRepository);
};
