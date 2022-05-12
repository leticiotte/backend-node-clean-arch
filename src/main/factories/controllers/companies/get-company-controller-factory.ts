import { GetCompanyController } from "../../../../presentation/controllers/companies/get-company-controller"
import { Controller } from "../../../../presentation/protocols"
import { GetCompany } from "../../../../domain/use-cases/companies/get-company";


export const makeGetCompanyController = (makeGetCompanyUseCase: GetCompany): Controller => {
  return new GetCompanyController(makeGetCompanyUseCase);
};
