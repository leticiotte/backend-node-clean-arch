import { Unit } from "../../../domain/entities/unit";
import { ListUnits } from "../../../domain/use-cases/units/list-all-units";
import { ListUnitsRepository } from "../../protocols/units/list-all-units-repository";

export class DbListUnits implements ListUnits {
  constructor (
    private readonly listUnitRepository: ListUnitsRepository
    ) {}

  async list(companyId?: string): Promise<Unit[]> {
    return await this.listUnitRepository.list(companyId)
  }
}