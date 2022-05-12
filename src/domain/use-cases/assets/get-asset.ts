import { Asset } from "../../entities/asset";

export interface GetAsset {
  get: (assetId: string) => Promise<Asset>
}
