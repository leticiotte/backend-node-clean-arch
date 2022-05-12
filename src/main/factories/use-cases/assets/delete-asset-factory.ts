import { DeleteAsset } from "../../../../domain/use-cases/assets/delete-asset";
import { DbDeleteAsset } from "../../../../data/use-cases/assets/db-delete-asset-use-cases";
import { MongoAssetRepository } from "../../../../infra/repositories/mongo/mongo-asset-repository";

export const makeDeleteAssetUseCase = (Asset: any): DeleteAsset => {
  const mongoDeleteAssetRepository = new MongoAssetRepository(Asset);
  return new DbDeleteAsset(mongoDeleteAssetRepository);
};
