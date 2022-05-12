import { Unit } from "../../../domain/entities/unit";

export interface UpdateUnitRepository {
  update: (unit: Unit) => Promise<boolean>
}
