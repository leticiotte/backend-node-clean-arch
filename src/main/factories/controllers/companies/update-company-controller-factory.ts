import { UpdateCompanyController } from "../../../../presentation/controllers/companies/update-company-controller"
import { Controller } from "../../../../presentation/protocols"
import { UpdateCompany } from "../../../../domain/use-cases/companies/update-company";


export const makeUpdateCompanyController = (makeUpdateCompanyUseCase: UpdateCompany): Controller => {
  return new UpdateCompanyController(makeUpdateCompanyUseCase);
};
