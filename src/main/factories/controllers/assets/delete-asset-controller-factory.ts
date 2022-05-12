import { DeleteAssetController } from "../../../../presentation/controllers/assets/delete-asset-controller"
import { Controller } from "../../../../presentation/protocols"
import { DeleteAsset } from "../../../../domain/use-cases/assets/delete-asset";


export const makeDeleteAssetController = (makeDeleteAssetUseCase: DeleteAsset): Controller => {
  return new DeleteAssetController(makeDeleteAssetUseCase);
};
