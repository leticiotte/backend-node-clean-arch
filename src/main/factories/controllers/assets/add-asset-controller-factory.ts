import { AddAssetController } from "../../../../presentation/controllers/assets/add-asset-controller"
import { Controller } from "../../../../presentation/protocols"
import { AddAsset } from "../../../../domain/use-cases/assets/add-asset";
import { GetUnit } from "../../../../domain/use-cases/units/get-unit";


export const makeAddAssetController = (makeAddAssetUseCase: AddAsset, makeGetUnitUseCase: GetUnit): Controller => {
  return new AddAssetController(makeAddAssetUseCase, makeGetUnitUseCase);
};
