import { Asset } from "../../entities/asset"

export interface UpdateAsset {
  update: (asset: Asset) => Promise<boolean>
}
