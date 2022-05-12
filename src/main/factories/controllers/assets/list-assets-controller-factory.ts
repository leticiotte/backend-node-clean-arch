import { ListAssetsController } from "../../../../presentation/controllers/assets/list-all-assets-controller"
import { Controller } from "../../../../presentation/protocols"
import { ListAssets } from "../../../../domain/use-cases/assets/list-all-assets";


export const makeListAssetsController = (makeListAssetsUseCase: ListAssets): Controller => {
  return new ListAssetsController(makeListAssetsUseCase);
};
