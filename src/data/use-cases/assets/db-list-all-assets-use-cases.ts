import { Asset } from "../../../domain/entities/asset";
import { ListAssets } from "../../../domain/use-cases/assets/list-all-assets";
import { ListAssetsRepository } from "../../protocols/assets/list-all-assets-repository";

export class DbListAssets implements ListAssets {
  constructor (
    private readonly listAssetRepository: ListAssetsRepository
    ) {}

  async list (unitId?: string): Promise<Asset[]> {
    return await this.listAssetRepository.list(unitId)
  }
}