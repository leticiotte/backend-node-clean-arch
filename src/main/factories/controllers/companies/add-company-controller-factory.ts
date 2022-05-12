import { AddCompanyController } from "../../../../presentation/controllers/companies/add-company-controller"
import { Controller } from "../../../../presentation/protocols"
import { AddCompany } from "../../../../domain/use-cases/companies/add-company";


export const makeAddCompanyController = (makeAddCompanyUseCase: AddCompany): Controller => {
  return new AddCompanyController(makeAddCompanyUseCase);
};
