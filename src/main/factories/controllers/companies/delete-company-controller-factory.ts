import { DeleteCompanyController } from "../../../../presentation/controllers/companies/delete-company-controller"
import { Controller } from "../../../../presentation/protocols"
import { DeleteCompany } from "../../../../domain/use-cases/companies/delete-company";


export const makeDeleteCompanyController = (makeDeleteCompanyUseCase: DeleteCompany): Controller => {
  return new DeleteCompanyController(makeDeleteCompanyUseCase);
};
