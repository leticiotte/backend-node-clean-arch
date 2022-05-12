export interface DeleteUnitRepository {
  delete: (unitId: string) => Promise<boolean>
}
