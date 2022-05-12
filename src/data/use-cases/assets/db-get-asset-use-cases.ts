import { Asset } from "../../../domain/entities/asset";
import { GetAsset } from "../../../domain/use-cases/assets/get-asset";
import { GetAssetRepository } from "../../protocols/assets/get-asset-repository";

export class DbGetAsset implements GetAsset {
  constructor (
    private readonly getAssetRepository: GetAssetRepository
    ) {}

  async get (assetId: string): Promise<Asset> {
    return await this.getAssetRepository.get(assetId)
  }
}