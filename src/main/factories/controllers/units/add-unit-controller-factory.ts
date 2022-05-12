import { AddUnitController } from "../../../../presentation/controllers/units/add-unit-controller"
import { Controller } from "../../../../presentation/protocols"
import { AddUnit } from "../../../../domain/use-cases/units/add-unit";
import { GetCompany } from "../../../../domain/use-cases/companies/get-company";


export const makeAddUnitController = (makeAddUnitUseCase: AddUnit, makeGetCompanyUseCase: GetCompany): Controller => {
  return new AddUnitController(makeAddUnitUseCase, makeGetCompanyUseCase);
};
