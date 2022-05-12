import { Asset } from "../../entities/asset";

export interface AddAsset {
  add: (asset: Asset) => Promise<boolean>
}
