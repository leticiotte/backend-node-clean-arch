import { Unit } from "../../../domain/entities/unit";

export interface AddUnitRepository {
  add: (unit: Unit) => Promise<boolean>
}
