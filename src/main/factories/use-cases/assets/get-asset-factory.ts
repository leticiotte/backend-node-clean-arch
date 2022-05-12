import { GetAsset } from "../../../../domain/use-cases/assets/get-asset";
import { DbGetAsset } from "../../../../data/use-cases/assets/db-get-asset-use-cases";
import { MongoAssetRepository } from "../../../../infra/repositories/mongo/mongo-asset-repository";

export const makeGetAssetUseCase = (Asset: any): GetAsset => {
  const mongoGetAssetRepository = new MongoAssetRepository(Asset);
  return new DbGetAsset(mongoGetAssetRepository);
};
