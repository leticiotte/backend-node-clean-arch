import { Asset } from "../../../domain/entities/asset";

export interface GetAssetRepository {
  get: (assetId: string) => Promise<Asset>
}
