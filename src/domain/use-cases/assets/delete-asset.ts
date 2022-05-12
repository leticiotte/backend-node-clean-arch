export interface DeleteAsset {
  delete: (assetId: string) => Promise<boolean>
}
