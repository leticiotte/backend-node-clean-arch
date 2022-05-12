import { DeleteUnit } from "../../../domain/use-cases/units/delete-unit";
import { DeleteUnitRepository } from "../../protocols/units/delete-unit-repository";

export class DbDeleteUnit implements DeleteUnit {
  constructor (
    private readonly deleteUnitRepository: DeleteUnitRepository
    ) {}

  async delete (unitId: string): Promise<boolean> {
    return await this.deleteUnitRepository.delete(unitId)
  }
}