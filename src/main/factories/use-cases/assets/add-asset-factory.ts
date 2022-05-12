import { AddAsset } from "../../../../domain/use-cases/assets/add-asset";
import { DbAddAsset } from "../../../../data/use-cases/assets/db-add-asset-use-cases";
import { MongoAssetRepository } from "../../../../infra/repositories/mongo/mongo-asset-repository";

export const makeAddAssetUseCase = (Asset: any): AddAsset => {
  const mongoAddAssetRepository = new MongoAssetRepository(Asset);
  return new DbAddAsset(mongoAddAssetRepository);
};
