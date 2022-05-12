import { UpdateAssetController } from "../../../../presentation/controllers/assets/update-asset-controller"
import { Controller } from "../../../../presentation/protocols"
import { UpdateAsset } from "../../../../domain/use-cases/assets/update-asset";
import { GetUnit } from "../../../../domain/use-cases/units/get-unit";


export const makeUpdateAssetController = (makeUpdateAssetUseCase: UpdateAsset, makeGetUnitUseCase: GetUnit): Controller => {
  return new UpdateAssetController(makeUpdateAssetUseCase, makeGetUnitUseCase);
};
