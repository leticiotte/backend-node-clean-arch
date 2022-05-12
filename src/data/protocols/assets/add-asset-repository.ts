import { Asset } from "../../../domain/entities/asset";

export interface AddAssetRepository {
  add: (asset: Asset) => Promise<boolean>
}
