import { ListUnitsController } from "../../../../presentation/controllers/units/list-all-units-controller"
import { Controller } from "../../../../presentation/protocols"
import { ListUnits } from "../../../../domain/use-cases/units/list-all-units";


export const makeListUnitsController = (makeListUnitsUseCase: ListUnits): Controller => {
  return new ListUnitsController(makeListUnitsUseCase);
};
