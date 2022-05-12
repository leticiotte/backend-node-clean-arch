import { UpdateAsset } from "../../../../domain/use-cases/assets/update-asset";
import { DbUpdateAsset } from "../../../../data/use-cases/assets/db-update-asset-use-cases";
import { MongoAssetRepository } from "../../../../infra/repositories/mongo/mongo-asset-repository";

export const makeUpdateAssetUseCase = (Asset: any): UpdateAsset => {
  const mongoUpdateAssetRepository = new MongoAssetRepository(Asset);
  return new DbUpdateAsset(mongoUpdateAssetRepository);
};
