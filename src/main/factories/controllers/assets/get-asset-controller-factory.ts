import { GetAssetController } from "../../../../presentation/controllers/assets/get-asset-controller"
import { Controller } from "../../../../presentation/protocols"
import { GetAsset } from "../../../../domain/use-cases/assets/get-asset";


export const makeGetAssetController = (makeGetAssetUseCase: GetAsset): Controller => {
  return new GetAssetController(makeGetAssetUseCase);
};
