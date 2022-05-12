import { Asset } from "../../entities/asset"

export interface ListAssets {
  list: (unitId?: string) => Promise<Asset[]>
}
