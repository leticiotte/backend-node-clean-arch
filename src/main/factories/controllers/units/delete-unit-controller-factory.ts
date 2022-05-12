import { DeleteUnitController } from "../../../../presentation/controllers/units/delete-unit-controller"
import { Controller } from "../../../../presentation/protocols"
import { DeleteUnit } from "../../../../domain/use-cases/units/delete-unit";


export const makeDeleteUnitController = (makeDeleteUnitUseCase: DeleteUnit): Controller => {
  return new DeleteUnitController(makeDeleteUnitUseCase);
};
