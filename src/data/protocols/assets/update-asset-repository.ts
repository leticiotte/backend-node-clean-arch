import { Asset } from "../../../domain/entities/asset";

export interface UpdateAssetRepository {
  update: (asset: Asset) => Promise<boolean>
}
