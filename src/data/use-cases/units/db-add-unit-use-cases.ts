import { Unit } from "../../../domain/entities/unit";
import { AddUnit } from "../../../domain/use-cases/units/add-unit";
import { AddUnitRepository } from "../../protocols/units/add-unit-repository";

export class DbAddUnit implements AddUnit {
  constructor (
    private readonly addUnitRepository: AddUnitRepository
    ) {}

  async add (unit: Unit): Promise<boolean> {
    return await this.addUnitRepository.add(unit)
  }
}