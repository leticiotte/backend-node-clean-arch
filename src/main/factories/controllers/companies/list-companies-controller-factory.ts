import { ListCompaniesController } from "../../../../presentation/controllers/companies/list-all-companies-controller"
import { Controller } from "../../../../presentation/protocols"
import { ListCompanies } from "../../../../domain/use-cases/companies/list-all-companies";


export const makeListCompaniesController = (makeListCompaniesUseCase: ListCompanies): Controller => {
  return new ListCompaniesController(makeListCompaniesUseCase);
};
