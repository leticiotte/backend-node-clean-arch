import { UnitsAndAssetsByCompanyId } from "../../../domain/entities/units-and-assets-by-companyId";
import { ListUnitsAndAssetsByCompanyId } from "../../../domain/use-cases/companies/list-all-units-and-assets-by-companyId";
import { ListUnitsAndAssetsByCompanyIdRepository } from "../../protocols/companies/list-all-units-and-assets-by-companyId-repository";

export class DbListUnitsAndAssetsByCompanyId implements ListUnitsAndAssetsByCompanyId {
  constructor (
    private readonly listUnitsAndAssetsByCompanyIdRepository: ListUnitsAndAssetsByCompanyIdRepository
    ) {}

  async list (companyId: string): Promise<UnitsAndAssetsByCompanyId[]> {
    return await this.listUnitsAndAssetsByCompanyIdRepository.list(companyId)
  }
}