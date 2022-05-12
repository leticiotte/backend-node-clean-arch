import { UnitsAndAssetsByCompanyId } from "../../entities/units-and-assets-by-companyId";

export interface ListUnitsAndAssetsByCompanyId {
  list: (companyId: string) => Promise<UnitsAndAssetsByCompanyId[]>
}