export interface DeleteUnit {
  delete: (unitId: string) => Promise<boolean>
}
