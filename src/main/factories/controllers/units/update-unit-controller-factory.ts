import { UpdateUnitController } from "../../../../presentation/controllers/units/update-unit-controller"
import { Controller } from "../../../../presentation/protocols"
import { UpdateUnit } from "../../../../domain/use-cases/units/update-unit";
import { GetCompany } from "../../../../domain/use-cases/companies/get-company";


export const makeUpdateUnitController = (makeUpdateUnitUseCase: UpdateUnit, makeGetCompanyUseCase: GetCompany): Controller => {
  return new UpdateUnitController(makeUpdateUnitUseCase, makeGetCompanyUseCase);
};
