import { UnitsAndAssetsByCompanyId } from "../../../domain/entities/units-and-assets-by-companyId";

export interface ListUnitsAndAssetsByCompanyIdRepository {
  list: (companyId: string) => Promise<UnitsAndAssetsByCompanyId[]>
}
