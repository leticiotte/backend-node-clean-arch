const mongoose = require("mongoose");

import { AddAssetRepository } from "../../../data/protocols/assets/add-asset-repository";
import { DeleteAssetRepository } from "../../../data/protocols/assets/delete-asset-repository";
import { GetAssetRepository } from "../../../data/protocols/assets/get-asset-repository";
import { ListAssetsRepository } from "../../../data/protocols/assets/list-all-assets-repository";
import { UpdateAssetRepository } from "../../../data/protocols/assets/update-asset-repository";
import { Asset } from "../../../domain/entities/asset";

export class MongoAssetRepository
  implements
    AddAssetRepository,
    DeleteAssetRepository,
    GetAssetRepository,
    ListAssetsRepository,
    UpdateAssetRepository
{

  constructor (
    private readonly assetModel: any
    ) {}

  async add(asset: Asset): Promise<boolean> {
    try {
      await this.assetModel.create(asset);
      return true;
    } catch (error) {
      return false;
    }
  }

  async get(assetId: string): Promise<Asset | undefined> {
    try {
      const asset = await this.assetModel.findOne({ _id: assetId });
      return asset;
    } catch (error) {
      return undefined;
    }
  }

  async list(unitId?: string): Promise<Asset[]> {
    try {
      let filter;
      if(unitId)  filter = { $text : { $search : unitId } }
      const assets = await this.assetModel.find(filter);
      return assets;
    } catch (error) {
      return undefined;
    }
  }

  async delete(assetId: string): Promise<boolean> {
    try {
      await this.assetModel.deleteOne({ _id: assetId });
      return true;
    } catch (error) {
      return false;
    }
  }

  async update(asset: Asset): Promise<boolean> {
    const assetUpdate = {
      unitId: asset.unitId,
      name: asset.name,
      description: asset.description,
      image: asset.image,
      model: asset.model,
      owner: asset.owner,
      status: asset.status,
      healthLevel: asset.healthLevel
    } 
    try {
      const updtatedAsset = await this.assetModel.updateOne({ _id: asset._id }, assetUpdate);
      if (updtatedAsset.matchedCount === 0) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
