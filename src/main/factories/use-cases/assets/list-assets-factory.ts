import { ListAssets } from "../../../../domain/use-cases/assets/list-all-assets";
import { DbListAssets } from "../../../../data/use-cases/assets/db-list-all-assets-use-cases";
import { MongoAssetRepository } from "../../../../infra/repositories/mongo/mongo-asset-repository";

export const makeListAssetsUseCase = (Asset: any): ListAssets => {
  const mongoListAssetsRepository = new MongoAssetRepository(Asset);
  return new DbListAssets(mongoListAssetsRepository);
};
