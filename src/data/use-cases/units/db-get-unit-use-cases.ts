import { Unit } from "../../../domain/entities/unit";
import { GetUnit } from "../../../domain/use-cases/units/get-unit";
import { GetUnitRepository } from "../../protocols/units/get-unit-repository";

export class DbGetUnit implements GetUnit {
  constructor (
    private readonly getUnitRepository: GetUnitRepository
    ) {}

  async get (unitId: string): Promise<Unit> {
    return await this.getUnitRepository.get(unitId)
  }
}