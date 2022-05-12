import { Unit } from "../../../domain/entities/unit";
import { UpdateUnit } from "../../../domain/use-cases/units/update-unit";
import { UpdateUnitRepository } from "../../protocols/units/update-unit-repository";

export class DbUpdateUnit implements UpdateUnit {
  constructor (
    private readonly updateUnitRepository: UpdateUnitRepository
    ) {}

  async update (unit: Unit): Promise<boolean> {
    return await this.updateUnitRepository.update(unit)
  }
}