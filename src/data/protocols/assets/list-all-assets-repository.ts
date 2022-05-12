import { Asset } from "../../../domain/entities/asset";

export interface ListAssetsRepository {
  list: (unitId?: string) => Promise<Asset[]>
}
