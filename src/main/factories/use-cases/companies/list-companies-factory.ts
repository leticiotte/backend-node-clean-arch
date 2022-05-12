import { ListCompanies } from "../../../../domain/use-cases/companies/list-all-companies";
import { DbListCompanies } from "../../../../data/use-cases/companies/db-list-all-companies-use-cases";
import { MongoUserRepository } from "../../../../infra/repositories/mongo/mongo-user-repository";
import { MongoCompanyRepository } from "../../../../infra/repositories/mongo/mongo-company-repository";

export const makeListCompaniesUseCase = (Company: any): ListCompanies => {
  const mongoListCompaniesRepository = new MongoCompanyRepository(Company);
  return new DbListCompanies(mongoListCompaniesRepository);
};
