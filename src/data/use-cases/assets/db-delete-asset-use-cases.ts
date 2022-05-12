import { DeleteAsset } from "../../../domain/use-cases/assets/delete-asset";
import { DeleteAssetRepository } from "../../protocols/assets/delete-asset-repository";

export class DbDeleteAsset implements DeleteAsset {
  constructor (
    private readonly deleteAssetRepository: DeleteAssetRepository
    ) {}

  async delete (assetId: string): Promise<boolean> {
    return await this.deleteAssetRepository.delete(assetId)
  }
}