import { Asset } from "../../../domain/entities/asset";
import { AddAsset } from "../../../domain/use-cases/assets/add-asset";
import { AddAssetRepository } from "../../protocols/assets/add-asset-repository";

export class DbAddAsset implements AddAsset {
  constructor (
    private readonly addAssetRepository: AddAssetRepository
    ) {}

  async add (asset: Asset): Promise<boolean> {
    return await this.addAssetRepository.add(asset)
  }
}