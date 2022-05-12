import { GetUnitController } from "../../../../presentation/controllers/units/get-unit-controller"
import { Controller } from "../../../../presentation/protocols"
import { GetUnit } from "../../../../domain/use-cases/units/get-unit";


export const makeGetUnitController = (makeGetUnitUseCase: GetUnit): Controller => {
  return new GetUnitController(makeGetUnitUseCase);
};
