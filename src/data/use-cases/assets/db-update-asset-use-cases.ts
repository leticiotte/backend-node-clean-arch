import { Asset } from "../../../domain/entities/asset";
import { UpdateAsset } from "../../../domain/use-cases/assets/update-asset";
import { UpdateAssetRepository } from "../../protocols/assets/update-asset-repository";

export class DbUpdateAsset implements UpdateAsset {
  constructor (
    private readonly updateAssetRepository: UpdateAssetRepository
    ) {}

  async update (asset: Asset): Promise<boolean> {
    return await this.updateAssetRepository.update(asset)
  }
}