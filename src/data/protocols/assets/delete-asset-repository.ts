export interface DeleteAssetRepository {
  delete: (assetId: string) => Promise<boolean>
}
